import React from "react";
import styled from "styled-components";
import { Platform, TextInput } from "react-native";

const Input = styled.View`
  flex: 1;
  height: 50px;
  margin-top: 20px;
  border-radius: 4px;
  border-width: 0;
  background-color: #484b51;
  flex-direction: column;
`;

const Test = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 4px;
  border-width: 0;
  background-color: #484b51;
  padding: 0 16px;
  color: #f0f0f0;
  flex-direction: column;
`;

export default props => {
  return (
    <Input>
      <Test placeholder="heylaaaa" />
    </Input>
  );
};
