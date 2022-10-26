import React from "react";
import { Image, View } from "react-native";
import StyledText, { styles } from "./Styles/StyledText";

export default function RepositoryItemsHeader(repo) {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image
          style={styles.image}
          source={{ uri: repo.ownerAvatarUrl }}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">{repo.fullName}</StyledText>
        <StyledText color={"secondary"}> {repo.description}</StyledText>
        <StyledText style={styles.languaje}> {repo.language}</StyledText>
      </View>
    </View>
  );
}
