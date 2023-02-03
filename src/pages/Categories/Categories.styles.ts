import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.SafeAreaView`
  background-color: ${theme.colors.primary};
  flex: 1;
  align-items: flex-start;
`;

export const Content = styled.ScrollView`
  padding: 47px 24px 120px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  line-height: 25px;
  color: ${theme.colors.highlight};
`;

export const TextInput = styled.TextInput`
  background: #494949;
  border-radius: 24px;
  font-family: ${theme.fonts.text400};
  font-size: 12px;
  color: ${theme.colors.highlight};
  width: 98.5%;
  padding: 19px 0 19px 16px;
`;
