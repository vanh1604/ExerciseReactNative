import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";

const mockData = [
  { id: "1", name: "Product 1", price: "$10" },
  { id: "2", name: "Product 2", price: "$20" },
  { id: "3", name: "Product 3", price: "$15" },
  { id: "4", name: "Product 4", price: "$25" },
  // Thêm các sản phẩm khác vào đây
];

const MyFlatList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <View>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={false}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Name: {selectedProduct.name}</Text>
            <Text>Price: {selectedProduct.price}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default MyFlatList;
