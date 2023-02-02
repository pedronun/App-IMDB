import { API_KEY } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import { useQuery } from "react-query";
import { INewRelease } from "../../@types/newRealease";
import api from "../../services/api";
import {
  Container,
  ImageBackground,
  MovieCompany,
  MovieContent,
  MovieText,
  MovieTitle,
  Title,
} from "./NewRelease.styles";
import { useNavigation } from "@react-navigation/native";

export function NewRelease() {
  const navigator = useNavigation();
  const {
    data: releases,
    isError,
    isLoading,
  } = useQuery<INewRelease[]>("newReleases", async () => {
    const response = await api.get(`/MostPopularMovies/${API_KEY}`);
    return response.data.items;
  });

  return !isError ? (
    <Container
      onPress={() => {
        navigator.navigate("Movie", { movieId: releases && releases[0].id });
      }}
      activeOpacity={1}
    >
      <Title>New Release.</Title>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        releases?.length && (
          <>
            <ImageBackground
              source={{ uri: releases[0].image }}
              borderRadius={24}
              resizeMode={"cover"}
            >
              <MovieContent>
                <View>
                  <MovieTitle>{releases[0].title.split(":")[0]}</MovieTitle>
                  <MovieCompany>20th Century Studios</MovieCompany>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Image
                    source={require("../../assets/stars.png")}
                    style={{ width: 80, height: 16 }}
                    resizeMode={"contain"}
                  />
                  <MovieText>
                    From{" "}
                    {parseInt(releases[0].imDbRatingCount) >= 500
                      ? "+500"
                      : releases[0].imDbRatingCount}{" "}
                    users
                  </MovieText>
                </View>
              </MovieContent>
              <LinearGradient
                colors={["transparent", "#000"]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 187,
                  width: "100%",
                  borderRadius: 24,
                }}
              />
            </ImageBackground>
          </>
        )
      )}
    </Container>
  ) : null;
}
