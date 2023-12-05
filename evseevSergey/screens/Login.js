import { Button, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <Button
        title="go to reg"
        onPress={() => {
          nav.push("Registration");
        }}
      />
      <Button
        title="login"
        onPress={() => {
          nav.replace("Drawer");
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
