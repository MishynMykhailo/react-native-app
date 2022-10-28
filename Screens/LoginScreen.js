import { View, Text, StyleSheet } from "react-native";
import React from "react";

const LoginScreen = () => {
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
          <Text style={styles.header}>Логин</Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            style={styles.textInput}
            placeholder={"Адрес электронной почты"}
            lineHeight={1.18}
            onFocus={() => {
              changeShowKeyboard(true);
            }}
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
          />
        </View>
        <View style={{ marginTop: 43 }}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={keyboardHide}
          >
            <Text style={styles.btnText} lineHeight={1.18}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});
export default LoginScreen;
