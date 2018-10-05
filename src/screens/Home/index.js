import React, { Component } from "react";
import styled from "styled-components";
import HomeList from "./HomeList";
import { Text } from "react-native";
const View = styled.View`
  background: ${props => props.theme.colors.p800};
  flex: 1;
`;

const FeedHeader = styled.View`
  background: ${props => props.theme.colors.p600};
  width: 620px;
  height: 40px;
  border-bottom-color: #f0f0f020;
  border-bottom-width: 1px;
  margin: 0 auto;
`;

const Box = styled.View`
  height: 80px;
  border-bottom-color: #f0f0f020;
  border-bottom-width: 1px;
  background: red;
  width: 620px;
  margin: 0 auto;
`;

const HeaderTitle = styled.Text`
  color: ${props => props.theme.colors.p300};
  line-height: 40px;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  margin-left: 8px;
`;

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <FeedHeader>
          <HeaderTitle>Recent Activities</HeaderTitle>
        </FeedHeader>
        <HomeList />
      </View>
    );
  }
}
