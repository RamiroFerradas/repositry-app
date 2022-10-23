import React from "react";
import { View } from "react-native";
import RepositoryItemsHeader from "./RepositoryItemsHeader";
import RepositoryStats from "./RepositoryStats";
import { styles } from "./Styles/StyledText";

export default function RepositoryItem(repo) {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemsHeader {...repo} />
      <RepositoryStats {...repo} />
    </View>
  );
}
