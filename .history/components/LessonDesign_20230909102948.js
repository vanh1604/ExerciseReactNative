import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

const LessonDesign = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buổi Học Về Thiết Kế</Text>
      <TextInput style={styles.input} placeholder="Nhập tên của bạn" />
      <Image style={styles.image} source={require("./your-image-file.png")} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Button clicked!")}
      >
        <Text style={styles.buttonText}>Nhấn vào đây</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

export default LessonDesign;
