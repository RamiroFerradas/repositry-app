import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "./Theme";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAling: "center",
  },
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  languaje: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  appBar: {
    container: {
      backgroundColor: theme.appBar.primary,
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 10,
      flexDirection: "row",
    },
    text: {
      color: theme.appBar.textSecondary,
      paddingHorizontal: 10,
    },
    scroll: { paddingBottom: 10 },
    active: {
      color: theme.appBar.textPrimary,
    },
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
