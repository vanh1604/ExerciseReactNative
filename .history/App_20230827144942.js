import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LessonDesign from "./components/LessonDesign";
import Caption from "./components/Caption";
export default function App() {
  return (
    <View>
      <LessonDesign />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
