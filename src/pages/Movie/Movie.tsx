import { Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Content, MovieContent, Title } from "./Movie.styles";
import api from "../../services/api";
import { API_KEY } from "@env";
import { IMovie } from "../../@types/movie";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global/global";
import { LinearGradient } from "expo-linear-gradient";
import { MovieCompany, MovieText } from "../../components/NewRelease/NewRelease.styles";
import { useQuery } from "react-query";

export function Movie({ route }: any) {
  const movieId = route.params.movieId;
  const navigation = useNavigation();

  const {
    data: movie,
    isError,
    isLoading,
  } = useQuery<IMovie>("movie", async () => {
    const response = await api.get(`/Title/${API_KEY}/${movieId}/Posters,Trailer,`);
    return response.data;
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return isError && movie ? (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color={theme.colors.primary} />
      </BackButton>
      <Image
        source={{ uri: movie.image }}
        style={{ width: "100%", height: 400 }}
      />
      <LinearGradient
        colors={["transparent", theme.colors.primary]}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          height: 100,
          position: "absolute",
          top: 300,
        }}
      />
      <Content>
        <MovieContent>
          <View>
            <Title>{movie?.title?.split(":")[0]}</Title>
            <MovieCompany>{movie.companyList[0].name}</MovieCompany>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Image
              source={require("../../assets/stars.png")}
              style={{ width: 80, height: 16 }}
              resizeMode={"contain"}
            />
            <MovieText>
              From{" "}
              {parseInt(
                movie.imDbRatingVotes ? movie.imDbRatingVotes : "0"
              ) >= 500
                ? "+500"
                : movie.imDbRatingVotes}{" "}
              users
            </MovieText>
          </View>
        </MovieContent>
      </Content>
    </Container>
  ) : null;
}
