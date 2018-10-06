import React, { Component } from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  margin-top: 20px;
  border-radius: 4px;
  border-width: 0;
  background-color: #484b51;
`;

export default props => {
  return (
    <Input
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable={true}
      maxLength={40}
    />
  );
};
