import React from "react";
import { View } from "react-native";
import AppBar from "../Repositories/AppBar";
import RepositoryList from "../Repositories/RepositoryList";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
