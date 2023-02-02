import { View, Text, FlatList, Image } from "react-native";
import {
  Container,
  Movie,
  MovieEpisode,
  MovieImage,
  MovieProgress,
  MovieTitle,
  Title,
} from "./ContinueWatching.styles";
import { data } from "./data";

export function ContinueWatching() {
  return (
    <Container>
      <Title>Continue Watching.</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Movie>
            <MovieImage>
              <Image
                source={
                  index == 0
                    ? require(`../../assets/watched-movie-1.png`)
                    : index == 1
                    ? require(`../../assets/watched-movie-2.png`)
                    : require(`../../assets/watched-movie-3.png`)
                }
                style={{ width: 162, height: 124 }}
              />
              <MovieProgress style={{ width: 162 - item.progress }} />
            </MovieImage>
            <MovieTitle>{item.title}</MovieTitle>
            <MovieEpisode>{item.ep}</MovieEpisode>
          </Movie>
        )}
      />
    </Container>
  );
}
