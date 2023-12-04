import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { itemId } = route.params;
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    fetchitemDetails();
  }, []);

  const fetchitemDetails = async () => {
    try {
      const response = await axios.get(
        `https://dinosaurx.onrender.com/api/dinosaur/${itemId}`
      );
      setItemDetails(response.data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Volver a Ejemplos" onPress={() => navigation.goBack()} />
      </View>
      {itemDetails ? (
        <View>
          <Text>
            <Text style={styles.text}>Nombre:</Text> {itemDetails.name}
          </Text>
          <Text>
            <Text style={styles.text}>Descripcion:</Text>{" "}
            {itemDetails.description}
          </Text>
          <Text>
            <Text style={styles.text}>Tipo:</Text> {itemDetails.type}
          </Text>
          <Text>
            <Text style={styles.text}>Dieta:</Text> {itemDetails.diet}
          </Text>
          <Text>
            <Text style={styles.text}>Habitat:</Text> {itemDetails.habitat}
          </Text>
          <Text>
            <Text style={styles.text}>Periodo de Existencia:</Text>{" "}
            {itemDetails.historical_period}
          </Text>
          <Text>
            <Text style={styles.text}>Tamano y peso:</Text>{" "}
            {itemDetails.size_weight}
          </Text>
          <Text style={styles.text}>Imagenes:</Text>
          <View style={styles.imagesContainer}>
            {itemDetails.images.map((image) => (
              <Image
                key={image._id}
                source={{ uri: image.link }}
                style={styles.image}
                onError={(e) =>
                  console.log("Error cargando imagen", e.nativeEvent.error)
                }
              />
            ))}
          </View>
        </View>
      ) : (
        <View style={[styles.container1, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignSelf: "flex-start",
  },
  image: {
    width: 200,
    height: 150,
    objectFit: "fill",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
  },
  imagesContainer : {
    alignSelf: "center",
    gap: 20
  }
});

export default DetailsScreen;
