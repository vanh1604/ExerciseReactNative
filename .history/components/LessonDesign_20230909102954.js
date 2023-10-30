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
      <Image
        style={styles.image}
        source={require("https://images.unsplash.com/photo-1693952875302-9e600b8ddc6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")}
      />
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
