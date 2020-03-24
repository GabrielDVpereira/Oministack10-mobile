import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground
} from "@react-navigation/stack";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#7D40E7"
          },
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "DevRadar", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Perfil no GitHub", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
