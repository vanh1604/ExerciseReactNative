import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LessonDesign from "./components/LessonDesign";
import Caption from "./components/Caption";
import WeatherApp from "./components/WeatherApp";
export default function App() {
  return (
    <SafeAreaView>
      <LessonDesign />
      <WeatherApp></WeatherApp>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
