import React from "react";
import { Text, View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from "../Repositories/AppBar";
import RepositoryList from "../Repositories/RepositoryList";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/signin" exact element={<Text>HOLA MUNDO</Text>}></Route>
      </Routes>
    </View>
  );
};

export default Main;
