import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./main";
import { SafeAreaView } from "react-native-safe-area-context";

const AppNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigator;