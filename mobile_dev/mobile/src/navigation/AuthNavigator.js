import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { routes } from "../constants/routes";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.register}
        component={RegisterScreen}
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
