// import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("./assets/images/bg.jpg")}
        >
          {/* <LoginScreen /> */}
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
