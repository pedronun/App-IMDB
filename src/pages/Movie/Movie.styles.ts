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
  line-height: 32px;
  color: ${theme.colors.highlight};
`;

export const MovieTop = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Description = styled.Text`
  margin-top: 16px;
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 22px;
  color: ${theme.colors.secondary40};
`;

export const Cast = styled.View`
  margin-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CastItem = styled.View`
  width: 163px;
  height: 52px;
  background: ${theme.colors.bottomBarColor};
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ActorImage = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;

export const ActorName = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 11px;
  line-height: 20px;
  color: ${theme.colors.highlight};
`;

export const ActorCharacter = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 10px;
  line-height: 16px;
  color: ${theme.colors.highlight};
`;
