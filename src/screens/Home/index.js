import React, { Component } from "react";
import styled from "styled-components";
import HomeList from "./HomeList";
import Sidebar from "../../components/sidebar";
import Input from "../../components/smartSentence";

const View = styled.View`
  background: ${props => props.theme.colors.p800};
  flex: 1;
  flex-direction: row;
`;

const Container = styled.View`
  background: ${props => props.theme.colors.p800};
  background: #36393f;
  flex: 1;
  flex-direction: column;
  padding: 0 16px;
`;

const WrapperSidebar = styled.View`
  background: ${props => props.theme.colors.p800};
  width: 270px;
`;

const SmartSentence = styled.View`
  border-top-color: #f0f0f020;
  border-top-width: 1px;
  height: 80px;
  flex-direction: row;
`;

const FeedHeader = styled.View`
  height: 60px;
  border-bottom-color: #f0f0f020;
  border-bottom-width: 1px;
  margin-bottom: 16px;
`;

const HeaderTitle = styled.Text`
  color: ${props => props.theme.colors.p300};
  line-height: 60px;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Useless Multiline Placeholder"
    };
  }
  render() {
    return (
      <View>
        <WrapperSidebar>
          <Sidebar />
        </WrapperSidebar>
        <Container>
          <FeedHeader>
            <HeaderTitle>Recent Activities</HeaderTitle>
          </FeedHeader>
          <HomeList />
          <SmartSentence>
            <Input
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              multiline={true}
              numberOfLines={4}
            />
          </SmartSentence>
        </Container>
      </View>
    );
  }
}
