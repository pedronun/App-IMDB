import { SafeAreaView, Text, View } from "react-native";
import { theme } from "../../global/global";

export function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      <Text style={{ color: theme.colors.highlight }}>Home</Text>
    </SafeAreaView>
  )
}