import React, { useContext, useState } from "react";
import Screen from "./Screen";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import jwtDecode from "jwt-decode";

import AppLogo from "../components/AppLogo";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Separator from "../components/Separator";
import SocialMediaButton from "../components/SocialMediaButton";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").min(5).max(50),
  password: Yup.string().required().min(5).label("Password").max(50),
});

function LoginScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const result = await authApi.login(email, password);
    setLoading(false);

    if (!result.ok) return setError(result.data.status);

    const token = result.data.jwt_token;
    const decoded = jwtDecode(token);

    authContext.setUser(decoded);
    await authStorage.storeToken(token);
  };

  return (
    <Screen color={colors.PRIMARY}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text
            style={{ fontSize: 20, color: colors.BLACK, fontWeight: "bold" }}
          >
            Welcome ....
          </Text>
        </View>

        <Text style={styles.span}>Sign in to continue</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleLogin(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            touched,
            errors,
          }) => (
            <View style={styles.formContainer}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <AppInputText
                iconName={"email"}
                iconColor={colors.GRAY}
                placeholder="Your Email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <AppInputText
                iconName={"lock"}
                iconColor={colors.GRAY}
                placeholder="Password"
                secureTextEntry
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}

              {loading ? (
                <ActivityIndicator color={colors.PRIMARY} size={"large"} />
              ) : (
                <AppButton title={"Sign in"} onPress={handleSubmit} />
              )}
            </View>
          )}
        </Formik>

        <Separator />

        <View>
          <Text style={styles.span}>Don't have an account?</Text>
          <AppButton
            title={"Register"}
            onPress={() => navigation.navigate("register")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.WHITE,
    height: "100%",
    marginTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  formContainer: {},
  span: {
    textAlign: "center",
    color: colors.GRAY,
  },
});

export default LoginScreen;
