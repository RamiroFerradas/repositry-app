import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableNativeFeedback,
} from "react-native";
import StyledText from "./StyledText";

export default function RepositoryItem(repo) {
  return (
    <View key={repo.id} style={styles.container}>
      <Button
        onPress={() => {
          alert("holaaa");
        }}
        title="Press Me"
      />
      <TouchableNativeFeedback
        onPress={() => {
          alert("holaaa");
        }}
        style={{ cursor: "pointer" }}
      >
        <StyledText big bold>
          HOLA MUNDO
        </StyledText>
      </TouchableNativeFeedback>
      <StyledText big bold>
        id: {repo.id}
      </StyledText>
      <StyledText blue>FullName: {repo.fullName}</StyledText>
      <StyledText blue>Description: {repo.description}</StyledText>

      <StyledText blue>Languaje: {repo.language}</StyledText>
      <StyledText small>Stars: {repo.stargazersCount}</StyledText>
      <StyledText small>Forks: {repo.forksCount}</StyledText>
      <StyledText small>Rating: {repo.ratingAverage}</StyledText>
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
