import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Screen from "./Screen";
import AppButton from "../components/AppButton";
import Modal from "../components/Modal";
import AppInputText from "../components/AppInputText";
import purchasedToken from "../api/purchasedToken";
import * as Yup from "yup";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";

export default function WelcomeScreen() {
  const styles = {
    container: "flex h-full justify-center items-center flex-col px-5",
    title: "text-white text-xl font-black",
    buttonsContainer: "flex flex-col w-full justify-center items-center mt-20",
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const validationSchema = Yup.object().shape({
    amount: Yup.number().required().label("Amount"),
    meterNumber: Yup.string().required().min(6).max(6).label("Meter number"),
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateToken = async (values) => {
    console.log(values);
    setLoading(true);
    const result = await purchasedToken.generateToken(
      values.amount,
      values.meterNumber
    );
    setLoading(false);
    console.log(result);
    if (!result.ok) return setError(result.data.status);
  };

  const handleOnPress = async (action) => {
    switch (action) {
      case "generate":
        setModalContent(
          <View>
            <Formik
              initialValues={{ amount: "", meterNumber: "" }}
              onSubmit={(values) => generateToken(values)}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                setFieldTouched,
                touched,
                errors,
              }) => (
                <View>
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                  <AppInputText
                    iconName={"contactless-payment"}
                    placeholder="Your amount"
                    keyboardType="number-pad"
                    onBlur={() => setFieldTouched("amount")}
                    onChangeText={handleChange("amount")}
                  />
                  {touched.amount && (
                    <ErrorMessage>{errors.amount}</ErrorMessage>
                  )}
                  <AppInputText
                    iconName={"contactless-payment"}
                    placeholder="Meter Number"
                    keyboardType="number-pad"
                    onBlur={() => setFieldTouched("meterNumber")}
                    onChangeText={handleChange("meterNumber")}
                  />
                  {touched.password && (
                    <ErrorMessage>{errors.meterNumber}</ErrorMessage>
                  )}

                  {loading ? (
                    <ActivityIndicator color={colors.PRIMARY} size={"large"} />
                  ) : (
                    <AppButton
                      title={"Generate TOken"}
                      onPress={handleSubmit}
                    />
                  )}
                </View>
              )}
            </Formik>
          </View>
        );
        break;
      case "verify":
        setModalContent(<Text>Verify</Text>);
        break;
      case "history":
        setModalContent(<Text>History</Text>);
        break;
      default:
        Alert.alert("Error", "Something went wrong");
    }
    setModalVisible(true);
  };
  return (
    <Screen>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View>{modalContent}</View>
      </Modal>
      <View className={styles.container}>
        <Text className={styles.title}>EUCL TOKEN PROVIDER</Text>
        <View className={styles.buttonsContainer}>
          <AppButton
            title="Generate Token"
            onPress={() => handleOnPress("generate")}
          />
          <AppButton
            title="Verify Token"
            onPress={() => handleOnPress("verify")}
          />
          <AppButton
            title="Tokens History"
            onPress={() => handleOnPress("history")}
          />
        </View>
      </View>
    </Screen>
  );
}
