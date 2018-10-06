import styled, { css } from "styled-components";

export const Img = styled.Image`
  border-radius: ${props => props.theme.avatar.radius};
  width: ${props => props.theme.avatar.size};
  height: ${props => props.theme.avatar.size};
  background-color: ${props => props.theme.colors.p600};
`;

export const AvatarTitle = styled.Text`
  margin-left: 8px;
  line-height: ${props => props.theme.avatar.size};
  font-weight: 400;
  color: ${props => props.theme.colors.p200};
  font-size: ${props => props.theme.fontSize.h3};
`;

export const AvatarWrapper = styled.View`
  height: ${props => props.theme.avatar.size};
  padding: 8px 0;
  padding-left: 8px;
  flex-direction: row;
  ${props =>
    props.active &&
    css`
      background: ${props => props.theme.colors.b200};
    `};
`;
