import { useAuth } from "@realm/react";
import { View, Button } from "react-native";

const appId = "trello-zmmdose";

export const Login = () => {
  const { logInWithAnonymous } = useAuth();
  const guestLogin = () => {
    logInWithAnonymous();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Continue as guest" onPress={guestLogin} />
    </View>
  );
};
