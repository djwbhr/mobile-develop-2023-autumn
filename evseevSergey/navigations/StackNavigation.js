import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../screens/Registration";
import Splash from "../screens/Splash";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
