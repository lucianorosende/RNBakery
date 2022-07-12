import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./main";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigator from "./tab";
import AuthNavigator from "./auth";

const AppNavigator = () => {
  const [user, setUser] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
