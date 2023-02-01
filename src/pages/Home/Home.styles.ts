import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const Content = styled.View`
  padding: 39px 20px;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  line-height: 25px;
  color: ${theme.colors.highlight};
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 20px;
  line-height: 33px;
  color: ${theme.colors.highlight};
`;
