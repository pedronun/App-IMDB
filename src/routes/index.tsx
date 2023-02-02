import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { theme } from "../global/global";
import { Categories } from "../pages/Categories";
import { Home } from "../pages/Home/Home";
import { Movie } from "../pages/Movie/Movie";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // @ts-ignore
        tabBarOptions={{
          style: {
            backgroundColor: theme.colors.bottomBarColor,
            borderTopColor: "transparent",
            position: "absolute",
            bottom: 35,
            left: 20,
            right: 20,
            elevation: 0,
            height: 90,
            borderRadius: 15,
          },
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }: any) =>
              focused ? (
                <View style={{top: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name="home-outline" size={24} color={theme.colors.green} />
                  <Text style={{color: theme.colors.green, fontSize: 12, top: 5}}>Home</Text>
                </View>
              ) : (
                <View style={{top: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name="home-outline" size={24} color={theme.colors.secondary40} />
                  <Text style={{color: theme.colors.secondary40, fontSize: 12, top: 5}}>Home</Text>
                </View>
              ),
          }}
        />
        <Tab.Screen 
          name="Categories" 
          component={Categories} 
          options={{
            tabBarIcon: ({ focused }: any) =>
              focused ? (
                <View style={{top: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name="category" size={24} color={theme.colors.green} />
                  <Text style={{color: theme.colors.green, fontSize: 12, top: 5}}>Categories</Text>
                </View>
              ) : (
                <View style={{top: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name="category" size={24} color={theme.colors.secondary40} />
                  <Text style={{color: theme.colors.secondary40, fontSize: 12, top: 5}}>Categories</Text>
                </View>
              ),
          }} 
        />
        <Tab.Screen 
          name="Movie" 
          component={Movie} 
          options={{
            tabBarButton: () => null,
            tabBarVisible:false
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
