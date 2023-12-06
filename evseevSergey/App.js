import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainNavigation from "./navigations/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar backgroundColor="rgb(217,217,217)" />
      </View>
      <MainNavigation />
    </NavigationContainer>
  );
}
