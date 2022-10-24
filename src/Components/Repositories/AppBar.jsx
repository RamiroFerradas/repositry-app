import React from "react";
import { ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText, { styles } from "./Styles/StyledText";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();

  const active = pathname === to;
  const textStyles = [styles.appBar.text, active && styles.appBar.active];
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

export default function AppBar() {
  return (
    <View style={styles.appBar.container}>
      <ScrollView horizontal style={styles.appBar.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
}
