import React, { Component } from "react";
import {
  Platform,
  YellowBox,
  UIManager,
  TouchableOpacity,
  Button
} from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Feather from "react-native-vector-icons/Feather";

import Header from "./components/header";
import { Font } from "./Font";
import Home from "./screens/Home/index";
import wrapper, { Provider } from "open-app-provider";

import styled, { ThemeProvider } from "styled-components";
import i18n from "./utils/i18n";
import dark from "./utils/theme/dark";

const View = styled.View`
  background: ${props => props.theme.colors.p800};
  flex: 1;
`;

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

Font.loadAsync({
  feather: require("react-native-vector-icons/Fonts/Feather.ttf")
});

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const wrapped = CMP => wrapper(CMP, dark, i18n);

const baseStackConfig = {
  headerTransitionPreset: Platform.OS === "android" ? "fade-in-place" : "uikit",
  headerMode: "float",
  navigationOptions: ({ navigation }) => ({
    gesturesEnabled: ["dom", "ios"].includes(Platform.OS),
    headerStyle: {
      backgroundColor: "#20232D",
      ...(Platform.OS === "dom"
        ? {
            shadowOpacity: 0,
            height: 45,
            zIndex: 5
          }
        : null)
    },
    headerForceInset: {
      top: Platform.OS === "ios" ? "always" : "never",
      bottom: "never"
    },
    headerTitleStyle: [
      Platform.OS === "dom"
        ? {
            flex: 1,
            textAlign: "center",
            padding: 20,
            color: "#f0f0f0"
          }
        : {}
    ],
    header: headerProps => {
      return (
        <Provider i18n={i18n}>
          <ThemeProvider theme={dark}>
            <View>
              <Header {...headerProps} {...this.props} />
            </View>
          </ThemeProvider>
        </Provider>
      );
    }
  })
};

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Feather size={20} name="arrow-left" color="#99ADC6" />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MainStack = createStackNavigator(
  {
    Main: wrapped(Home)
  },
  {
    initialRouteName: "Main",
    ...baseStackConfig
  }
);

const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainStack },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    drawerWidth: 270
  }
);

export default Drawer;
