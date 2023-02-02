import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StatusBar, View } from "react-native";
import { Welcome } from "./src/pages/Welcome/welcome";

import { Routes } from "./src/routes";
import { QueryClient, QueryClientProvider } from "react-query";

SplashScreen.preventAutoHideAsync();
const client = new QueryClient();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

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
