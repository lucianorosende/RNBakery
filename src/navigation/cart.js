import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/index";
import { colors } from "../constants/themes/colors"

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const CartNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
                backgroundColor: isIOS ? colors.primary : colors.secondary,
            },
            headerTintColor: isIOS ? colors.white : colors.black,
            headerTitleStyle: {
                fontFamily: "Staatliches"
            }
        }}
        >
            <Stack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
                headerShown: false,
            }}
            />
            
        </Stack.Navigator>
    )
}

export default CartNavigator;