import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Content from "../components/Content";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Bienvenido a la mejor API de Dinosaurios"/>
      <Content />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "white",
  },
});
export default HomeScreen;
