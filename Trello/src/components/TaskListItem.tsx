import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export interface ITask {
  id: string;
  description: string;
}

interface Props {
  task: ITask;
}

export const TaskListItem = ({ task }: Props) => {
  return (
    <Link href={`/${task.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>

        <AntDesign name="close" size={16} color="gray" />
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

