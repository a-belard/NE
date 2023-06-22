import React, { useContext, useState } from "react";
import Screen from "./Screen";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import AppLogo from "../components/AppLogo";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Separator from "../components/Separator";
import ErrorMessage from "../components/ErrorMessage";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  phone: Yup.string().required().min(10).label("Phone"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  

  const handleRegister = async ({ name, phone, email, password }) => {
    setLoading(true);
    const result = await authApi.register(name, phone, email, password);
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
          <AppLogo font_size={32} />
          <Text
            style={{ fontSize: 20, color: colors.BLACK, fontWeight: "bold" }}
          >
            Welcome ....
          </Text>
        </View>

        <Text style={styles.span}>Please fill in the information</Text>
        <Formik initialValues={{ name: '', phone: '', email: '', password: '' }} onSubmit={(values) => handleRegister(values)} validationSchema={validationSchema}>
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            touched,
            errors,
          }) => (
            <View style={styles.formContainer}>
              { error && <ErrorMessage>{ error }</ErrorMessage> }
              <AppInputText
                iconName={"account"}
                iconColor={colors.GRAY}
                placeholder="Full Name"
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              { touched.name && <ErrorMessage>{ errors.name }</ErrorMessage>}
              <AppInputText
                iconName={"phone"}
                iconColor={colors.GRAY}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                onChangeText={handleChange('phone')}
                onBlur={() => setFieldTouched('phone')}
              />
              { touched.phone && <ErrorMessage>{ errors.phone }</ErrorMessage>}
              <AppInputText
                iconName={"email"}
                iconColor={colors.GRAY}
                placeholder="Your Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              { touched.email && <ErrorMessage>{ errors.email }</ErrorMessage>}
              <AppInputText
                iconName={"lock"}
                iconColor={colors.GRAY}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              { touched.password && <ErrorMessage>{ errors.password }</ErrorMessage>}
              { loading ? <ActivityIndicator color={colors.PRIMARY} size={'large'}/> : <AppButton title={"Proceed"} onPress={handleSubmit}/> }
            </View>
          )}
        </Formik>

        <Separator />

        <View>
          <Text style={styles.span}>If you've a PGM account</Text>
          <AppButton
            title={"Sign In"}
            onPress={() => navigation.navigate("login")}
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
export default RegisterScreen;
