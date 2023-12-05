import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TabNavigation from "./navigations/TabNavigation";
import DrawerNavigation from "./navigations/DrawerNavigation";
import MainStackNavigation from "./navigations/MainStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar backgroundColor="rgb(217,217,217)" />
      </View>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
