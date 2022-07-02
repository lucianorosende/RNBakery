import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ProductScreen,
  CategorieScreen,
  ProductDetailScreen,
} from "../screens/index";
import { colors } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isIOS ? colors.white : colors.black,
        headerTitleStyle: {
          fontFamily: "Staatliches",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategorieScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
