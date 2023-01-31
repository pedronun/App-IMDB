import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.View`
  width: 98%;
  height: 90%;
  align-items: center;
  justify-content: center;
  margin: 1px;
  background-color: ${theme.colors.primary};
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: ${theme.colors.highlight};
`;

export const Image = styled.Image`
  position: absolute;
  top: 2%;
  left: 2%;
  z-index: 0;
`;
