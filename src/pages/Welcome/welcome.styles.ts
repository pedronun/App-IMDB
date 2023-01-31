import { theme } from "./../../global/global";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 32px;
  line-height: 53px;
  color: ${theme.colors.highlight};
  margin-top: 23.76px;
`;

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: ${theme.colors.highlight};
  margin-bottom: 20px;
`;
