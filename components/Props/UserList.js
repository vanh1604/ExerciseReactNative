import { StyleSheet, Text, View } from "react-native";
import React from "react";
import User from "./User";
const UserList = () => {
  return (
    <View>
      <User name="John" age={20} />
      <User name="Mary" age={25} />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
