import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
// import jwtDecode from "jwt-decode";

import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";

export default function App() {
  const [user, setUser] = useState(null);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
