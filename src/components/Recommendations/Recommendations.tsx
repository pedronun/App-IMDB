import { API_KEY } from "@env";
import { FlatList, Text, View } from "react-native";
import { useQuery } from "react-query";
import { INewRelease } from "../../@types/newRealease";
import api from "../../services/api";
import { MovieShelf } from "../MovieContent/MovieShelf";
import {
  Container,
  Title
} from "./Recommendations.styles";

export function Recommendations() {
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
            <MovieShelf item={item} />
          )}
        />
      )}
    </Container>
  ) : null;
}
