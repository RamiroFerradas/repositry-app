import React from "react";
import { View } from "react-native";
import StyledText from "./Styles/StyledText";

export default function RepositoryStats(repo) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {repo.stargazersCount}
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          Stars:
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {repo.forksCount}
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {repo.reviewCount}
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          Review
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {repo.ratingAverage}
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>
      </View>
    </View>
  );
}
