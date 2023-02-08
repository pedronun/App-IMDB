import styled from "styled-components/native";
import { theme } from "../../global/global";

export const Container = styled.SafeAreaView`
  background-color: ${theme.colors.primary};
  flex: 1;
  align-items: flex-start;
`;

export const Content = styled.ScrollView`
  padding: 47px 0 0;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 16px;
  line-height: 25px;
  color: ${theme.colors.highlight};
  padding-left: 24px;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 22px;
  color: ${theme.colors.highlight};
  padding-left: 24px;
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

export const SubCategories = styled.View`
  margin-top: 32px;
`;

export const SubCategoriesButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
`;

export const SubCategory = styled.TouchableOpacity``;

export const MovieIcon = styled.Image`
  width: 166px;
  height: 161px;
  position: absolute;
  left: -32px;
  top: 30%;
`;

export const AnimeIcon = styled.Image`
  width: 108px;
  height: 187px;
  position: absolute;
  right: -12px;
  top: 6.5%;
`;

export const SubCategoryTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 14px;
  line-height: 23px;
  color: ${theme.colors.highlight};
  margin-right: 11px;
  margin-top: 22px;
`;

export const SubCategoryText = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 10px;
  line-height: 16px;
  color: ${theme.colors.highlight};
  margin-right: 11px;
`;

export const MovieResult = styled.View`
  margin: 16px 24px 120px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;