import { createStackNavigator } from "@react-navigation/stack";

import StackNavigation from "./StackNavigation";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={StackNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
