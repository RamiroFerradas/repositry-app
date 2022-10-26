import React from "react";
import { View } from "react-native";
import StyledText from "./Styles/StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

export default function RepositoryStats(repo) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(repo.stargazersCount)}
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          Stars
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(repo.forksCount)}
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
