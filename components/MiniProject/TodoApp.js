import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  // Hàm kiểm tra số nguyên tố
  function isPrime(num) {
    // Nếu num <= 1 thì không phải số nguyên tố
    if (num <= 1) {
      return false;
    }

    // Kiểm tra có bội số từ 2 tới căn bậc 2 của num không
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }

    // Nếu không có bội số thì là số nguyên tố
    return true;
  }

  // Sử dụng hàm
  console.log(isPrime(11)); // true
  console.log(isPrime(15)); // false
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <Text style={styles.subtitle}>Todos:</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.todoItem}>{item}</Text>}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  todoItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});
