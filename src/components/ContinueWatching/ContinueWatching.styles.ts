import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.View`
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 22px;
  color: ${theme.colors.highlight};
  margin-bottom: 8px;
`;

export const Movie = styled.View`
  width: 162px;
`;

export const MovieImage = styled.View``;

export const MovieProgress = styled.View`
  height: 2px;
  background-color: ${theme.colors.red};
  position: absolute;
  bottom: 0;
  left: 6px;
`;

export const MovieTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 12px;
  line-height: 20px;
  color: ${theme.colors.highlight};
  margin-top: 4px;
`;

export const MovieEpisode = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 12px;
  line-height: 19px;
  color: ${theme.colors.secondary50};
`;
