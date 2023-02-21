import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/image/photo-bg.jpg")}
      >
        <View style={styles.wrapperForm}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.imageBlack}
              source={require("../assets/image/black.png")}
            />
            <Image
              style={styles.imageAddPhoto}
              source={require("../assets/image/add-photo.png")}
            />
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.title}>Регистрация</Text>
            </View>
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
              <View>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  placeholder="Пароль"
                  secureTextEntry={true}
                />
                <Text style={styles.textShow}>Показать</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.paragraph}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
          <Image
            style={styles.imageAddPhoto}
            source={require("../assets/image/home-indicator.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBlack: {
    position: "absolute",
    width: 375,
    height: 44,
  },
  // imageAddPhoto: {
  //   position: "absolute",
  //   left: "90%",
  //   top: "65%",
  //   width: 25,
  //   height: 25,
  // },
  title: {
    marginBottom: 33,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    resizeMode: "cover",
    // width: 375,
    // height: 812,
  },
  imageWrapper: {
    position: "absolute",
    left: "35%",
    top: "-15%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  input: {
    padding: 16,
    marginTop: 16,
    height: 50,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderColor: "1px solid #E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
  },
  wrapperForm: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  textShow: {
    position: "absolute",
    top: "50%",
    left: "78%",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },
  form: {
    marginHorizontal: 16,
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
