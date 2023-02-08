import { Container, Title, Year } from "./MovieShelf.styles";
import { Image, StyleProp, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface IMovieShelfProps {
  item: {
    id: string;
    image: string;
    title: string;
    year: string;
  };
  style?: StyleProp<TextStyle>;
}

export function MovieShelf({ item, style }: IMovieShelfProps) {
  const navigation = useNavigation();
  
  return (
    <Container
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate("Movie", {
          id: item.id,
        });
      }}
      style={style}
    >
      <Image
        source={{ uri: item.image || "https://imdb-api.com/images/original/nopicture.jpg" }}
        style={{ width: 124, height: 124, borderRadius: 24 }}
      />
      <Title>{item.title.split(":")[0]}</Title>
      <Year>{item.year}</Year>
    </Container>
  );
}
