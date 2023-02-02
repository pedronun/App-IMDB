import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Movie() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>Movie</Text>
    </SafeAreaView>
  )
}