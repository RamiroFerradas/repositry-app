import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableNativeFeedback,
} from "react-native";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./Styles/StyledText";

export default function RepositoryItem(repo) {
  return (
    <View key={repo.id} style={styles.container}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {repo.fullName}
      </StyledText>
      <StyledText>Description: {repo.description}</StyledText>
      <StyledText>Languaje: {repo.language}</StyledText>
      <RepositoryStats {...repo} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
