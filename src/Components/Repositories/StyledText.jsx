import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "grey",
  },
  bold: {
    fontWeight: "bold",
  },
  blue: {
    color: "blue",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
});
export default function StyledText({ blue, children, big, small, bold }) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    big && styles.big,
    small && styles.small,
    bold && styles.bold,
  ];

  return <Text style={textStyles}>{children} </Text>;
}
