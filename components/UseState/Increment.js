import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Increment = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Count: {count}</Text>
      </View>
      <View style={styles.container_button}>
        <View>
          <TouchableOpacity onPress={incrementCount} style={styles.Button}>
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={decrease} style={styles.Button}>
            <Text>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_button: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
  },
});

export default Increment;
