import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

const RegistrationScreen = ({
  isShowKeyboard,
  keyboardHide,
  changeShowKeyboard,
}) => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setPassword("");
    setUserName("");
    setEmail("");
    if (isShowKeyboard) {
      changeShowKeyboard(false);
      keyboardHide();
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          ...styles.form,
          marginBottom: isShowKeyboard ? 32 : 78,
        }}
      >
        <View>
          <Text style={styles.header}>Регистрация</Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            style={styles.textInput}
            placeholder={"Логин"}
            lineHeight={1.18}
            onFocus={() => {
              changeShowKeyboard(true);
            }}
            value={userName}
            onChangeText={(value) => setUserName(value)}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            style={styles.textInput}
            placeholder={"Адрес электронной почты"}
            lineHeight={1.18}
            onFocus={() => {
              changeShowKeyboard(true);
            }}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            style={styles.textInput}
            placeholder={"Пароль"}
            lineHeight={1.18}
            secureTextEntry={true}
            onFocus={() => {
              changeShowKeyboard(true);
            }}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View style={{ marginTop: 43 }}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => {
              keyboardHide, handleSubmit();
            }}
          >
            <Text style={styles.btnText} lineHeight={1.18}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 16,
    flexDirection: "column",
    marginBottom: 78,
  },
  header: {
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    color: "#BDBDBD",
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
    fontSize: 16,
    fontWeight: "400",
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
  },
});
export default RegistrationScreen;
