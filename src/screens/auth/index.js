import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const AuthScreen = () => {
  const title = "Register";
  const message = "Do you want to register?";
  const messageAction = "login";
  const messageTarget = "login";

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-adress"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => console.log(messageTarget)}>
            <Text style={styles.promptButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
        <Button title={title} color={colors.primary} onPress={() => null} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
