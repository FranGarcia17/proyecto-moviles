import React from "react";
import { NavigationContainer, Navigator } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExampleScreen from "../screens/ExampleScreen";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DetailsScreen from "../screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AnotherStack = createStackNavigator();

// const AnotherStackNavigator = () => {
//   <AnotherStack.Navigator name="AnotherScreen" component={}>

//   </AnotherStack.Navigator>
// }

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Inicio"
      component={HomeScreen}
      options={{
        tabBarLabel: "Inicio",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="EndPoints"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="list" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Ejemplos"
      component={ExampleScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="code" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
