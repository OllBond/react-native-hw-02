import { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocus, setIsFocus] = useState({
    login: false,
    email: false,
    password: false,
  });

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  function keyboardHide() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/image/photo-bg.jpg")}
        >
          <View style={styles.form}>
            <View style={styles.imageWrapper}>
              <View style={styles.imageAdd}>
                <Image
                  style={styles.imageAddPhoto}
                  source={require("../assets/image/add.png")}
                />
              </View>
              <Image source={require("../assets/image/add-photo.png")} />
            </View>
            <View style={styles.form}>
              <View>
                <Text style={styles.title}>Регистрация</Text>
              </View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View
                  style={{
                    paddingBottom:
                      isFocus.email || isFocus.password || isFocus.login
                        ? 60
                        : 0,
                  }}
                >
                  <TextInput
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsFocus({ ...isFocus, login: true });
                    }}
                    onBlur={() => {
                      setIsFocus({ ...isFocus, login: false });
                    }}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Логин"
                    value={state.login}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                    style={{
                      ...styles.input,
                      borderColor: isFocus.login ? `#FF6C00` : `#E8E8E8`,
                    }}
                  />
                  <TextInput
                    keyboardType="email-address"
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsFocus({ ...isFocus, email: true });
                    }}
                    onBlur={() => {
                      setIsFocus({ ...isFocus, email: false });
                    }}
                    placeholder="Адрес электронной почты"
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                    style={{
                      ...styles.input,
                      borderColor: isFocus.email ? `#FF6C00` : `#E8E8E8`,
                    }}
                  />
                  <View>
                    <TextInput
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setIsFocus({ ...isFocus, password: true });
                      }}
                      onBlur={() => {
                        setIsFocus({ ...isFocus, password: false });
                      }}
                      placeholder="Пароль"
                      value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                      secureTextEntry={true}
                      style={{
                        ...styles.input,
                        borderColor: isFocus.password ? `#FF6C00` : `#E8E8E8`,
                      }}
                    />
                    <Text style={styles.textShow}>Показать</Text>
                  </View>
                </View>
              </KeyboardAvoidingView>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={keyboardHide}
                style={styles.button}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={styles.textLink}
                onPress={() => navigation.navigate("Login")}
              >
                Уже есть аккаунт? Войти
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 0,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    resizeMode: "cover",
  },

  title: {
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },

  imageWrapper: {
    position: "absolute",
    left: 150,
    top: -65,
    width: 120,
    height: 120,
    alignContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageAdd: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 100,
    top: 80,
    backgroundColor: `#FFFFFF`,
    borderWidth: 1,
    borderColor: `#FF6C00`,
    borderRadius: 100,
  },
  imageAddPhoto: {
    position: "absolute",
    width: 16,
    height: 16,
    left: 4,
    top: 4,
  },
  input: {
    padding: 16,
    marginTop: 16,
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderColor: "1px solid #E8E8E8",
    borderRadius: 8,
    // borderWidth: 1,
  },
  textShow: {
    position: "absolute",
    top: "50%",
    left: "78%",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  form: {
    paddingTop: 60,
    // height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  textLink: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
