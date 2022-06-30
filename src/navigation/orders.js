import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderScreen } from "../screens/index";
import { colors } from "../constants/themes/colors"

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const OrderNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Orders"
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
            name="Orders" 
            component={OrderScreen}
            options={{
                headerShown: false,
            }}
            />
            
        </Stack.Navigator>
    )
}

export default OrderNavigator;