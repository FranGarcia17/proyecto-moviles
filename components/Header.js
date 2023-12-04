import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://cdn1.vectorstock.com/i/1000x1000/83/90/dinosaurs-world-emblem-vector-7508390.jpg",
          }}
          style={{ width: 200, height: 150 }}
        />
      </View>
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  text: {
    color: "black",
  },
});

export default Header;
