import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LessonDesign from "./components/LessonDesign";
import Caption from "./components/Caption";
import WeatherApp from "./components/WeatherApp";
export default function App() {
  return (
    <View>
      {/* <LessonDesign /> */}

      <WeatherApp />
    </View>
  );
}

const styles = StyleSheet.create({});
