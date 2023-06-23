import React from "react";
import { StatusBar, Platform, StyleSheet, SafeAreaView } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "rgb(59,130,246)",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
