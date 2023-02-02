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

export const MovieContent = styled.TouchableOpacity`
  align-items: center;
  max-width: 124px;
`;

export const MovieTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: ${theme.colors.secondary30};
  margin-top: 8px;
`;

export const MovieYear = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: ${theme.colors.secondary70};
`;
