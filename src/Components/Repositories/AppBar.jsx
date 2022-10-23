import React from "react";
import { View } from "react-native";
import StyledText, { styles } from "./Styles/StyledText";

export default function AppBar() {
  return (
    <View style={styles.appBar.container}>
      <StyledText fontWeight="bold" style={styles.appBar.text}>
        Repositories
      </StyledText>
    </View>
  );
}
