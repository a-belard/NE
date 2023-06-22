import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppLogo from "../components/AppLogo";
import colors from "../config/colors";
const stars = [1, 2, 3, 4, 5];

function FeedbackScreen({ navigation }) {
    const [feedback, setFeedback] = useState(0);

    const handleFeedback = (index) => {
        setFeedback(index + 1);
        console.log('feedback: ', feedback);
    }

    
  return (
    <Screen color={colors.BLACK}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>Yayy!</Text>
          <Text style={styles.text}>
            We value all feedback, please rate your experience below:
          </Text>
        </View>

        <View
          style={[
            styles.detailsContainer,
            { flexDirection: "row", justifyContent: "space-around" },
          ]}
        >
          {stars.map((star, index) => (
            <TouchableOpacity key={index} onPress={() => handleFeedback(index)}>
              <MaterialCommunityIcons
                name="star"
                color={feedback > index ? colors.PRIMARY : colors.WHITE }
                size={45}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.text}>
            Thank you for helping us improve our service !
          </Text>
        </View>

        <View style={[styles.detailsContainer, { alignItems: "center" }]}>
          <AppLogo font_size={60} first_color={colors.WHITE} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailsContainer: {
    marginVertical: 40,
  },
  text: {
    textAlign: "center",
    color: colors.PRIMARY,
    fontSize: 24,
  },
});
export default FeedbackScreen;
