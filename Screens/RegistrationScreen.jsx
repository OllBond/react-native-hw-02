import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/image/photo-bg.jpg")}
      ></ImageBackground>
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder="Логин"
          />
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder="Адрес электронной почты"
          />
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder="Пароль   Показать"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.btnTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}>Уже есть аккаунт? Войти</Text>
      </View>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: 375,
    height: 812,
    fontFamily: "Roboto",
  },
  title: {
    marginBottom: 33,
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  // image: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   resizeMode: "cover",
  //   width: 375,
  //   height: 812,
  // },
  input: {
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderColor: "1px solid #E8E8E8",
    borderRadius: 8,
  },
  form: {
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  paragraph: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});
