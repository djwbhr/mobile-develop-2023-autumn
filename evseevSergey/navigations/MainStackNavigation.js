import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigation from "./DrawerNavigation";
import Registration from "../screens/Registration";
import Splash from "../screens/Splash";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
