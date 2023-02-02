import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 22px;
  color: ${theme.colors.secondary30};
  margin-bottom: 8px;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 187px;
  background-position: top;
`;

export const MovieContent = styled.View`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 1;
`;

export const MovieTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 24px;
  line-height: 39px;
  color: ${theme.colors.highlight};
`;

export const MovieCompany = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 12px;
  line-height: 19px;
  color: ${theme.colors.secondary60};
`;

export const MovieText = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 10px;
  line-height: 16px;
  color: ${theme.colors.secondary60};
`;
