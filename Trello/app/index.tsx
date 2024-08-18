import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { TaskBoard } from "./components/TaskBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <TaskBoard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

