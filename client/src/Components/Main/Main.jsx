import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import LoginPage from "../pages/LoginPage";
import AppBar from "../Repositories/AppBar";
import RepositoryList from "../Repositories/RepositoryList";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />

        <Route path="/singin" exact element={<LoginPage />} />
      </Routes>
    </View>
  );
};

export default Main;
