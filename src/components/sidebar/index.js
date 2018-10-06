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

const Header = styled.View`
  height: 50px;
  display: flex;
  align-items: center;
`;

const Span = styled.View`
  vertical-align: middle;
  cursor: pointer;
  flex: 1;
  text-align: center;
  margin-right: 8px;
  margin-left: 8px;
`;

const SpanInput = styled.View`
  flex: 10;
  margin-right: 8px;
  & input {
    background: #393f50;
    color: #f0f0f0;
  }
`;

const List = styled.View`
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
      <List>
        <AvatarWrapper>
          <Img source={{ uri: `https://picsum.photos/200` }} />
          <AvatarTitle>ivanminutillo</AvatarTitle>
        </AvatarWrapper>
        {[].map((a, i) => (
          <AvatarWrapper>
            <Img src={`${a.object.image}`} />
            <AvatarTitle>{a.object.name}</AvatarTitle>
          </AvatarWrapper>
        ))}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
