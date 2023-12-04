import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ruta from "../components/Ruta";
import axios from "axios";
import Button from "../components/Boton";
import Header from "../components/Header";

const ProfileScreen = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);

  const URLALLDINOSAURS = "https://dinosaurx.onrender.com/api/dinosaurs";
  const URLRANDOMDINOSAUR = "https://dinosaurx.onrender.com/api/dinosaurrandom";

  const fetchData = async () => {
    try {
      const response = await axios.get(URLALLDINOSAURS);
      setData(response.data.data);
      setShowInfo(!showInfo);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const fetchData1 = async () => {
    try {
      const response = await axios.get(URLRANDOMDINOSAUR);
      console.log(response.data)
      setData1(response.data);
      setShowInfo1(!showInfo1);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
    
  return (
    <ScrollView style={styles.container}>
      <Header title="Prueba nuestros endpoints"/>
      <View>
        <Text>Intenta esto</Text>
        <Text>Puedes aplicar este codigo para hacer la consulta</Text>
        <View style={{ color: "#fff", margin: 5, borderRadius: 2 }}>
          <Text style={{ color: "white", backgroundColor: "black", padding: 10 }}>
            fetch('https://dinosaurx.onrender.com/api/dinosaurs')
            .then(response => response.json()) .then(json => console.log(json))
          </Text>
        </View>
      </View>

      <View style={{margin: 5, borderRadius: 2}}>
        <Button onPress={fetchData} title={"Haz click"} />
        {showInfo && data.length > 0 && (
          <Text style={{ backgroundColor: "black", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </Text>
        )}
      </View>


      <View>
        <Text>Intenta esto</Text>
        <Text>Puedes aplicar este codigo para hacer la consulta</Text>
        <View style={{ color: "#fff", margin: 5, borderRadius: 2 }}>
          <Text style={{ color: "white", backgroundColor: "black", padding: 10 }}>
            fetch('https://dinosaurx.onrender.com/api/dinosaurrandom')
            .then(response => response.json()) .then(json => console.log(json))
          </Text>
        </View>
      </View>

      <View>
        <Button onPress={fetchData1} title={"Haz click"} />
        {showInfo1 && data1.length > 0 && (
          <Text style={{ backgroundColor: "black", color: "white" }}>
            {JSON.stringify(data1, null, 2)}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container : {
        flexDirection: "column",
        marginVertical: 10,
        // justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    text : {
        color: "#fff",
        textAlign: "center"
    },
    jsonText: {
      color: "white",
      backgroundColor: "black",
      padding: 10,
      marginTop: 10,
      fontFamily: "monospace",
    },
});
export default ProfileScreen;
