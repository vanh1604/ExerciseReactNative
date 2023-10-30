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
  Alert,
} from "react-native";
// Mảng ban đầu
const numbers = [5, 2, 67, 23, 10];

// Giả sử giá trị lớn nhất và nhỏ nhất ban đầu là phần tử đầu tiên
let max = numbers[0];
let min = numbers[0];

// Duyệt qua tất cả các phần tử trong mảng
for (let i = 1; i < numbers.length; i++) {
  const number = numbers[i];
  
  // Nếu phần tử lớn hơn giá trị lớn nhất hiện tại thì gán lại
  if (number > max) {
    max = number;
  }
  
  // Nếu phần tử nhỏ hơn giá trị nhỏ nhất thì gán lại   
  if (number < min) {
    min = number;
  }
}

console.log(`Giá trị lớn nhất là: ${max}`); 
console.log(`Giá trị nhỏ nhất là: ${min}`);
const WeatherApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather App</Text>
      {/* <Image
        source={require("../assets/plane.avif")}
        style={styles.weatherIcon}
      /> */}
      <Text style={styles.temperature}>25°C</Text>
      <TextInput placeholder="Enter city" style={styles.input} />
      <Button style={styles.button} title="Search city" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: "red",
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
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default WeatherApp;
