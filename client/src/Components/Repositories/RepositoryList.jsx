import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import useFetchRepositories from "../../Hooks/useFetchRepositories";
// import repositories from "../../data/repositories";
import RepositoryItem from "./RepositoryItem";

export default function RepositoryList() {
  const { repositoriesNode } = useFetchRepositories();

  if (!repositoriesNode.length) {
    return <Text>CARGANDO...</Text>;
  }
  return (
    <FlatList
      data={repositoriesNode}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
}

// export default RepositoryList;
