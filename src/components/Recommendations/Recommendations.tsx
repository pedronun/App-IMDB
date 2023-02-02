import { FlatList, Image, Text, View } from "react-native";
import {
  Container,
  MovieContent,
  MovieTitle,
  MovieYear,
  Title,
} from "./Recommendations.styles";
import { useQuery } from "react-query";
import { INewRelease } from "../../@types/newRealease";
import api from "../../services/api";
import { API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";

export function Recommendations() {
  const navigation = useNavigation();
  const {
    data: recommendations,
    isError,
    isLoading,
  } = useQuery<INewRelease[]>("recommendations", async () => {
    const response = await api.get(`/MostPopularMovies/${API_KEY}`);
    return response.data.items;
  });

  return !isError ? (
    <Container>
      <Title>• For you</Title>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <MovieContent
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("Movie", {
                  id: item.id,
                });
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 124, height: 124, borderRadius: 24 }}
              />
              <MovieTitle>{item.title.split(":")[0]}</MovieTitle>
              <MovieYear>{item.year}</MovieYear>
            </MovieContent>
          )}
        />
      )}
    </Container>
  ) : null;
}
