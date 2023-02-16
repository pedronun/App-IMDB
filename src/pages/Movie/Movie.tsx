import { useEffect } from "react";
import { Image, View, Text, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ActorCharacter,
  ActorImage,
  ActorName,
  BackButton,
  Cast,
  CastItem,
  Container,
  Content,
  Description,
  MovieTop,
  Title,
} from "./Movie.styles";
import api from "../../services/api";
import { API_KEY } from "@env";
import { IMovie } from "../../@types/movie";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global/global";
import { LinearGradient } from "expo-linear-gradient";
import {
  MovieCompany,
  MovieText,
} from "../../components/NewRelease/NewRelease.styles";
import { useQuery, useQueryClient } from "react-query";
import { Button } from "../../components/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Movie({ route }: any) {
  const movieId = route.params.movieId;
  const navigation = useNavigation();

  const {
    data: movie,
    isError,
    isLoading,
    refetch,
  } = useQuery<IMovie>("movie", async () => {
    const response = await api.get(
      `/Title/${API_KEY}/${movieId}/Posters,Trailer,`
    );

    return response.data;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@movieId')
        
        if(value !== movieId) {
          await AsyncStorage.setItem('@movieId', movieId)
          return refetch();
        }
      } catch(e) {
        console.log('>>> e', e)
      }
    }

    getData();
  }, [movieId])

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return !isError && movie ? (
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
        <MovieTop>
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
              {parseInt(movie.imDbRatingVotes ? movie.imDbRatingVotes : "0") >=
              500
                ? "+500"
                : movie.imDbRatingVotes}{" "}
              users
            </MovieText>
          </View>
        </MovieTop>
        <Description>{movie.plot}</Description>
        <Cast>
          {movie.actorList.splice(0, 4).map((actor) => {
            return (
              <CastItem key={actor.id}>
                <LinearGradient
                  colors={[theme.colors.green, theme.colors.purple]}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                  style={{
                    height: 56,
                    width: 56,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 26,
                    marginRight: 8,
                  }}
                >
                  <ActorImage source={{ uri: actor.image }} />
                </LinearGradient>
                <View>
                  <ActorName>{actor.name}</ActorName>
                  <ActorCharacter>As {actor.asCharacter}</ActorCharacter>
                </View>
              </CastItem>
            );
          })}
        </Cast>
        <View style={{alignItems: 'center', marginTop: 40, marginBottom: 150}}>
          <Button title="Watch now" onPress={() => Linking.openURL(movie.trailer.link)} />
        </View>
      </Content>
    </Container>
  ) : null;
}
