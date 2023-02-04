import { API_KEY } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState, useCallback } from "react";
import { useQueryClient } from "react-query";
import { ISearchTitle } from "../../@types/searchTitle";
import { theme } from "../../global/global";
import api from "../../services/api";
import {
  Container,
  Content,
  Title,
  TextInput,
  SubCategories,
  SubCategoriesButton,
  SubCategory,
  SubCategoryTitle,
  SubCategoryText,
  MovieIcon,
  AnimeIcon,
  SubTitle,
} from "./Categories.styles";
import { View, ImageBackground, FlatList, Text } from "react-native";
import { MovieShelf } from "../../components/MovieContent/MovieShelf";

export function Categories() {
  const [search, setSearch] = useState<string>("");
  const queryClient = useQueryClient();
  const moviesRecommendation: any = queryClient.getQueryData("recommendations");

  let result: any;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get<ISearchTitle>(
        `/SearchTitle/${API_KEY}/${search}`
      );

      result = data.results;
    };

    fetchData();
  }, [search]);

  const handleSubCategory = useCallback(() => {
    result = moviesRecommendation;
  }, []);

  return (
    <Container>
      <Content>
        <Title>Search for a content</Title>
        <View style={{ paddingHorizontal: 24 }}>
          <LinearGradient
            colors={[theme.colors.green, theme.colors.purple]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              height: 62,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 26,
              marginTop: 8,
            }}
          >
            <TextInput
              placeholder="Search for a content."
              placeholderTextColor={"#6C6C6C"}
              value={search}
              onChangeText={setSearch}
            />
          </LinearGradient>
        </View>
        {result !== undefined && result.length ? <Text>Result</Text> : (
          <>
            <SubCategories>
              <SubTitle>Categories.</SubTitle>
              <SubCategoriesButton>
                <SubCategory
                  activeOpacity={0.9}
                  onPress={() => handleSubCategory()}
                >
                  <ImageBackground
                    source={require("../../assets/movies-category.png")}
                    style={{
                      width: 163,
                      height: 148,
                      alignItems: "flex-end",
                      marginLeft: 24,
                    }}
                  >
                    <MovieIcon
                      source={require("../../assets/movie-icon.png")}
                      style={{ transform: [{ translateY: -50 }] }}
                      resizeMode={"contain"}
                    />
                    <SubCategoryTitle>Movies</SubCategoryTitle>
                    <SubCategoryText>+100 Titles</SubCategoryText>
                  </ImageBackground>
                </SubCategory>
                <SubCategory activeOpacity={0.9}>
                  <ImageBackground
                    source={require("../../assets/show-category.png")}
                    style={{
                      width: 163,
                      height: 148,
                      alignItems: "flex-start",
                      marginRight: 24,
                    }}
                  >
                    <AnimeIcon
                      source={require("../../assets/anime-icon.png")}
                      style={{
                        transform: [{ translateY: -50 }, { rotate: "-15deg" }],
                      }}
                    />
                    <SubCategoryTitle
                      style={{ marginRight: 0, marginLeft: 16 }}
                    >
                      Animes
                    </SubCategoryTitle>
                    <SubCategoryText style={{ marginRight: 0, marginLeft: 16 }}>
                      +100 Titles
                    </SubCategoryText>
                  </ImageBackground>
                </SubCategory>
              </SubCategoriesButton>
            </SubCategories>
            <SubTitle>Most searched.</SubTitle>
            <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ alignSelf: "flex-start" }}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={moviesRecommendation}
              renderItem={({ item }) => <MovieShelf item={item} />}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
