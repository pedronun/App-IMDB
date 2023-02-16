import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { StatusBar, View } from "react-native";
import { Welcome } from "./src/pages/Welcome/welcome";

import { QueryClient, QueryClientProvider } from "react-query";
import { Routes } from "./src/routes";

SplashScreen.preventAutoHideAsync();
const client = new QueryClient();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [fontsLoaded] = useFonts({
    Axiforma_700: require("./assets/fonts/Axiforma-Bold.ttf"),
    Axiforma_400: require("./assets/fonts/Axiforma-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {isAuthenticated ? (
          <Routes />
        ) : (
          <Welcome setIsAuthenticated={setIsAuthenticated} />
        )}
      </View>
    </QueryClientProvider>
  );
}
