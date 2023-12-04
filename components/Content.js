import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import Button from "./Boton";

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const URLALLDINOSAURS = "https://dinosaurx.onrender.com/api/dinosaurs";
  const URLRANDOMDINOSAUR = "https://dinosaurx.onrender.com/api/dinosaurrandom";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dinosaurx.onrender.com/api/dinosaurs"
      );
      console.log(response.data);
      setData(response.data.data);
      setShowInfo(!showInfo);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View >
      <View style={styles.container}>
        <Text>Rutas</Text>
        <Text>
          GET - Todos los dinosaurios -
          "https://dinosaurx.onrender.com/api/dinosaurs"
        </Text>
        <Text>
          GET - Dinosaurio Random -
          "https://dinosaurx.onrender.com/api/dinosaurrandom"
        </Text>
        <Text>
          GET - Dinosaur especifico -
          "https://dinosaurx.onrender.com/api/dinosaur/id"
        </Text>
      </View>

      <Text>Intenta esto</Text>
      <Text>Puedes aplicar este codigo para hacer la consulta:</Text>
      <View style={{ color: "#fff", margin: 5, borderRadius: 2 }}>
        <Text style={{ color: "white", backgroundColor: "black", padding: 10 }}>
          fetch('https://dinosaurx.onrender.com/api/dinosaurrandom')
          .then(response => response.json()) .then(json => console.log(json))
        </Text>
      </View>

      <View>
        <Button onPress={fetchData} title={"Haz click"} />
        {showInfo && data.length > 0 && (
          <Text style={{ backgroundColor: "black", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  jsonText: {
    color: "white",
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    fontFamily: "monospace",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
    marginVertical: 5,
  },
  container: {
    marginBottom: 50
  }
});
export default Content;
