import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface ITask {
  description: string;
}

interface Props {
  task: ITask;
}

export default function TaskListItem({ task }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>

      <AntDesign name="close" size={16} color="gray" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
