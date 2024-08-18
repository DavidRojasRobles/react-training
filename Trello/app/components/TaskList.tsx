import { View, Text, FlatList, StyleSheet } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { description: "First task" },
    { description: "Second task" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item, index }) => (
          <TaskListItem key={index} task={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
