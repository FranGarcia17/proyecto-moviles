import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return <AppNavigator />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
  },
});
