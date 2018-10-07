import React from "react";
import styled, { css } from "styled-components";
import { Img, AvatarTitle, AvatarWrapper } from "../atoms/avatar";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.colors.p900};
  background: #2f3136;
  flex: 1;
  ${props =>
    props.isOpen &&
    css`
    margin-left: 0px
      width: 100%;
    `};
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fontSize.h3};
  color: ${props => props.theme.colors.p300};
  margin-top: 16px;
  margin-left: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Channel = styled.TouchableOpacity`
  background: #29292a;
  height: 30px;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 8px;
  border-top-left-radius: ${props => (props.active ? "0px" : "3px")};
  border-bottom-left-radius: ${props => (props.active ? "0px" : "3px")};
  border-left-width: ${props => (props.active ? "2px" : 0)};
  border-left-color: ${props =>
    props.active ? props.theme.colors.b100 : "transparent"};
`;

const ChannelTitle = styled.Text`
  line-height: 30px;
  letter-spacing: 0.5px;
  font-size: ${props => props.theme.fontSize.h3};
  color: ${props =>
    props.active ? props.theme.colors.p100 : props.theme.colors.p200};
  font-weight: ${props => (props.active ? "700" : "400")};
`;

const List = styled.View`
  flex-direction: column;
  padding: 0 8px;
  & a {
    display: block;
    &:hover {
      background: ${props => props.theme.colors.b200};
    }
  }
`;

const Sidebar = ({ togglePanel, agents, data, isOpen, toggleSidebar }) => {
  return (
    <Wrapper isOpen={isOpen}>
      {/* <Header>
        <Span onClick={togglePanel}>
          <Icons.Menu width="18" color="#f0f0f0" />
        </Span>
        <SpanInput>
          <Input placeholder="Search" />
        </SpanInput>
      </Header> */}
      <Title>Active channels</Title>
      <List>
        {/* <AvatarWrapper>
          <Img source={{ uri: `https://picsum.photos/200` }} />
          <AvatarTitle>ivanminutillo</AvatarTitle>
        </AvatarWrapper>
        {[].map((a, i) => (
          <AvatarWrapper>
            <Img src={`${a.object.image}`} />
            <AvatarTitle>{a.object.name}</AvatarTitle>
          </AvatarWrapper>
        ))} */}
        <Channel>
          <ChannelTitle>#sentence-structure</ChannelTitle>
        </Channel>
        <Channel>
          <ChannelTitle>#p2p</ChannelTitle>
        </Channel>
        <Channel>
          <ChannelTitle>#feminism</ChannelTitle>
        </Channel>
        <Channel active>
          <ChannelTitle active>#general</ChannelTitle>
        </Channel>
        <Channel>
          <ChannelTitle>#decentralization</ChannelTitle>
        </Channel>
        <Channel>
          <ChannelTitle>#smart-house</ChannelTitle>
        </Channel>
        <Channel>
          <ChannelTitle>#kids</ChannelTitle>
        </Channel>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
