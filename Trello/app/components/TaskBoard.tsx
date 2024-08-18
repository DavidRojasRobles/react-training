import { SafeAreaView, StyleSheet, View } from "react-native";
import { TaskList } from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";

export const TaskBoard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        <TaskList />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
