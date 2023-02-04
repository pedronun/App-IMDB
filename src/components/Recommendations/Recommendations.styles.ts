import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.View`
  margin-top: 27px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 16px;
  line-height: 26px;
  color: ${theme.colors.highlight};
  margin-bottom: 16px;
`;
