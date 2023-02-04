import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.TouchableOpacity`
  align-items: center;
  max-width: 124px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: ${theme.colors.secondary30};
  margin-top: 8px;
`;

export const Year = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: ${theme.colors.secondary70};
`;