import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";

const WeatherApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Weather App</Text>
      <Image
        source={require("../assets/plane.avif")}
        style={styles.weatherIcon}
      />
      <Text style={styles.temperature}>25°C</Text>
      <TextInput placeholder="Enter city" style={styles.input} />
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    marginBottom: 10,
    color: "black",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default WeatherApp;
