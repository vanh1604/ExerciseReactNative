import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const data = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
  { id: "5", text: "Item 5" },
  { id: "6", text: "Item 6" },
  { id: "7", text: "Item 7" },
  { id: "8", text: "Item 8" },
  { id: "9", text: "Item 9" },
  { id: "10", text: "Item 10" },
];
const Caption = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.text}>Danh sách sản phẩm</Text>
      </View>
      <View style={styles.container_item}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
              <AntDesign name="check" size={24} color="black" />
            </View>
          )}
        />
      </View>
      
    </SafeAreaView>
  );
};

export default Caption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 5,
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
  },
  header: {
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 30,
    flexDirection: "row",
  },
  container_item: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    padding: 30,
  },
});
