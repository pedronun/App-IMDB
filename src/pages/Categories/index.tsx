import { Text, SafeAreaView } from "react-native";
import { theme } from "../../global/global";

export function Categories() {
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      <Text style={{ color: theme.colors.highlight }}>Categories</Text>
    </SafeAreaView>
  );
}
