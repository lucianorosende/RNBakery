import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { Input } from "../../components/index";
import { signUp, signIn } from "../../store/actions/auth.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Register" : "Login";

  const onHandleAuth = () => {
    dispatch(isLogin ? signIn(email, password) : signUp(email, password));
  };

  const onHandleChange = (text, type) => {
    if (type === "email") {
      setEmail(text);
    } else {
      setPassword(text);
    }
  };
  const handleChangeAuth = () => {
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Input
          placeholder="example@example.com"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onHandleChange(text, "email")}
          value={email}
          label="Email"
        />

        <Input
          placeholder="********"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => onHandleChange(text, "password")}
          value={password}
          label="password"
        />
        <Button
          title={title}
          color={colors.primary}
          onPress={onHandleAuth}
          style={styles.buttonContainer}
        />
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={handleChangeAuth}>
            <Text style={styles.promptButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
