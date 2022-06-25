import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductScreen, CategorieScreen, ProductDetailScreen } from "../screens/index";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={CategorieScreen}/>
            <Stack.Screen name="Products" component={ProductScreen}/>
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;