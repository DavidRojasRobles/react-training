import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Task } from "../models/Task";
import { useRealm } from "@realm/react";

export interface ITask {
  id: string;
  description: string;
}

interface Props {
  task: Task;
}

export const TaskListItem = ({ task }: Props) => {
  const realm = useRealm();

  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });
  };
  return (
    <Link href={`/${task._id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>

        <AntDesign onPress={deleteTask} name="close" size={16} color="gray" />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#1D2125",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

