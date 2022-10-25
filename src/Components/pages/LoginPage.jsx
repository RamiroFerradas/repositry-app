import { Formik, useField } from "formik";
import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import StyledText, { styles } from "../Repositories/Styles/StyledText";
import StyledTextInput from "../Repositories/Styles/StyledTextinput";
import { LoginValidation } from "./ValidationSchema";

export default function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };
  const styles = StyleSheet.create({
    form: {
      margin: 12,
      forntSize: 12,
      marginBottom: 20,
    },
    error: { color: "red" },
  });

  const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
      <>
        <StyledTextInput
          error={meta.error}
          value={field.value}
          onChangeText={(value) => helpers.setValue(value)}
          {...props}
        />
        {meta.error && (
          <StyledText style={styles.error}>{meta.error}</StyledText>
        )}
      </>
    );
  };

  return (
    <View>
      <Formik
        validationSchema={LoginValidation}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => {
          return (
            <View style={styles.form}>
              <FormikInputValue name="email" placeholder="E-mail" />
              <FormikInputValue
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Button onPress={handleSubmit} title="Log In" />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
