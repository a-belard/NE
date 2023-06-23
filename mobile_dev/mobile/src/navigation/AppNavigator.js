import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import { routes } from "../constants/routes";
import Tokens from "../screens/Tokens";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.welcome}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.tokens}
        component={Tokens}
        options={{ animation: "slide_from_bottom", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
