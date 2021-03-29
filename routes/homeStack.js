import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
          height: 100,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
      headerMode="screen"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="MovieRatings" />
            ),
          };
        }}
      />
      <Stack.Screen name="Review Details" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
