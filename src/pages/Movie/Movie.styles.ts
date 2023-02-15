import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const Content = styled.View`
  margin: 10px 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  left: 30px;
  z-index: 1;
  background-color: ${theme.colors.highlight};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 32px;
  line-height: 53px;
  color: ${theme.colors.highlight};
`;

export const MovieContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MovieTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 32px;
  line-height: 53px;
  color: ${theme.colors.highlight};
`;
