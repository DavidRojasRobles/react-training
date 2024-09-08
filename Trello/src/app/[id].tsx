import { useObject, useRealm } from "@realm/react";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput } from "react-native";
import { BSON } from "realm";
import { Task } from "../models/Task";
import { useState } from "react";

const TaskDetails = () => {
  const realm = useRealm();
  const { id } = useLocalSearchParams();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  const [taskDescription, setTaskDescription] = useState(
    task?.description ?? ""
  );
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const updateTaskDescription = (value: string) => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = value;
    });
  };

  const onChangeText = (value: string) => {
    setTaskDescription(value);

    if (timer !== undefined) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      updateTaskDescription(value);
    }, 500);

    setTimer(newTimer);
  };

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />

      <TextInput
        value={taskDescription}
        onChangeText={onChangeText}
        style={{ color: "white", fontSize: 20 }}
      />
    </View>
  );
};

export default TaskDetails;

