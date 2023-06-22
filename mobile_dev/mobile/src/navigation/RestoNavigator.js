import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OrderScreen from "../screens/OrderScreen";
import Screen from "../screens/Screen";
import { Text, View } from "react-native";
import colors from "../config/colors";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const TestScreen = () => {
  return (
    <Screen>
      <View>
        <Text>Hi, this for testing my tabs</Text>
      </View>
    </Screen>
  );
};

const RestoNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="RestoItems"
      screenOptions={{
        tabBarActiveTintColor: colors.PRIMARY,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RestoItems"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TimeManagement"
        component={TestScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="clock-time-nine-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={TestScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="basket-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={TestScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RestoNavigator;
