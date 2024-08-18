import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TaskList } from "./components/TaskList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10 }}>
        <TaskList />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

