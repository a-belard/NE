import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, width = "100%" }) {
  const styles = {
    text: `text-[${colors.PRIMARY}] text-md font-bold`,
    button: `bg-white w-[${width}] py-5 my-3 rounded-full justify-center items-center w-full`,
  };
  return (
    <TouchableOpacity onPress={onPress} className={styles.button}>
      <Text className={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
