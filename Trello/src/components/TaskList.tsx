import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { TaskListItem } from "./TaskListItem";
import { useEffect, useState } from "react";
import { useQuery, useRealm, useUser } from "@realm/react";
import { Task } from "../models/Task";

export const TaskList = () => {
  const realm = useRealm();
  const tasks = useQuery(Task);

  const user = useUser();

  useEffect(() => {
    console.log(
      `DEAREST - : user = ${JSON.stringify(
        user,
        (key, value) => (value instanceof Map ? [...value] : value),
        2
      )}`
    );
  }, [user]);

  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    realm.write(() => {
      realm.create(Task, { description: newTask, user_id: user.id ?? "123" });
    });
    setNewTask("");
  };

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
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "white",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});

