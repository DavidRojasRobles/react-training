import { useObject } from "@realm/react";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { BSON } from "realm";
import { Task } from "../models/Task";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />

      <Text style={{ color: "white", fontSize: 20 }}>{task.description}</Text>
    </View>
  );
};

export default TaskDetails;

