import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container } from './Movie.styles';
import { useQuery } from 'react-query';
import api from '../../services/api';
import { API_KEY } from '@env';
import { IMovie } from '../../@types/movie';

export function Movie({ route }: any) {
  const movieId = route.params.movieId;
  const navigation = useNavigation();

  return (
    <Container>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity> */}
      <Text>Movie</Text>
    </Container>
  )
}