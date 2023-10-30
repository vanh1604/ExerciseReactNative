import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ExampleUseState = () => {
  const [name, setName] = useState("");
  const [buttonColor, setButtonColor] = useState("gray");

  const onPressHandler = () => {
    setName("Hello " + name);
  };

  const onChangeTextHandler = (text) => {
    setName(text);
    setButtonColor("blue");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={onChangeTextHandler}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={onPressHandler}
      >
        <Text>Greet</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: 200,
    margin: 10,
    padding: 10,
  },

  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default ExampleUseState;
