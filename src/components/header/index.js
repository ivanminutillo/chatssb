import React, { Component } from "react";
import styled from "styled-components";
// import Status from './Status'
// import Hamburger from './Menu/Hamburger'
import Feather from "react-native-vector-icons/Feather";

const Navbar = styled.View`
  position: relative;
  flex: 1;
  // height: 50px;
  // background-color: ${props => props.theme.colors.p300};
  background-color: #36393f;
  flex-direction: column;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
`;

const HeaderLeft = styled.View`
  flex-direction: row;
  margin-left: 16px;
`;

const Img = styled.View`
  border-radius: ${props => props.theme.avatar.radius};
  width: ${props => props.theme.avatar.mini};
  height: ${props => props.theme.avatar.mini};
  margin-top: 11px;
  margin-left: 0px;
  background-color: ${props => props.theme.colors.p600};
`;
const Title = styled.Text`
  margin-left: 8px;
  line-height: 50px;
  color: ${props => props.theme.colors.p100};
  font-weight: 500;
  font-size: 16px;
  flex: 1;
`;

const Left = styled.TouchableOpacity`
  width: 20px;
  margin-top: 12px;
  margin-right: 8px;
`;

const RightIcon = styled.TouchableOpacity`
  width: 20px;
  margin-top: 12px;
  margin-right: 16px;
`;


const Header = props => {
  const { index, navigation } = props;
  return (
    <Navbar>
      <HeaderLeft>
        {index === 0 && (
          <Left onPress={() => navigation.toggleDrawer()}>
            <Feather size={20} name="menu" color="#99ADC6" />
          </Left>
        )}
        {index > 0 && (
          <Left onPress={() => navigation.goBack(0)}>
            <Feather size={20} name="arrow-left" color="#99ADC6" />
          </Left>
        )}
        <Img src={`https://picsum.photos/200/300`} />
        <Title>ivan minutillo</Title>
        <RightIcon onPress={() => alert("This is a button!")}>
          <Feather size={20} name="search" color="#99ADC6" />
        </RightIcon>
        <RightIcon onPress={() => alert("This is a button!")}>
          <Feather size={20} name="sidebar" color="#99ADC6" />
        </RightIcon>
      </HeaderLeft>
    </Navbar>
  );
};

export default Header;
