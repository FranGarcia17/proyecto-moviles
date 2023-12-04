import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ExampleScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dinosaurx.onrender.com/api/dinosaurs");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const navigateToDetails = (itemId) => {
    navigation.navigate("Details", {itemId});
  };

  return (
    <View>
      
      {
        data.map((item) => (
          <TouchableOpacity key={item._id} style={styles.item} onPress={() => navigateToDetails(item._id)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ExampleScreen;


// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import axios from "axios";

// const ExampleScreen = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://dinosaurx.onrender.com/api/dinosaurs"
//       );
//       setData(response.data.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <View>
//         <Text>Loading ...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View>
//         <Text style={styles.text}>Error: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.containermain}>
//       <Text style={styles.title}>Ejemplo consumiendo API</Text>
//       {data.map((item) => (
//         <View key={item._id}>
//           <Text style={{color: "#fff", marginLeft: 10}}>
//             <Text style={styles.subtitle}>Nombre: </Text>
//             {item.name}
//           </Text>
//           <Text style={styles.description}>
//             <Text style={styles.subtitle}>Descripcion: </Text>{" "}
//             {item.description}
//           </Text>
//           {item.images && item.images.length > 0 && (
//             <View style={styles.container}>
//               {item.images.map((image) => (
//                 <Image
//                   key={image._id}
//                   source={{ uri: image.link }}
//                   style={styles.image}
//                 />
//               ))}
//             </View>
//           )}
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     color: "#fff",
//   },
//   image: {
//     width: 100,
//     height: 100,
//     resizeMode: "center",
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     gap: 15,
//     margin: 10,
//   },
//   containermain: {
//     // margin: 10,
//     backgroundColor: "#202020",
//   },
//   description: {
//     textAlign: "justify",
//     color: "#fff",
//     margin: 10,
//   },
//   title: {
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 15,
//     color: "#fff",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontWeight: "bold",
//     color: "#fff"
//   },
// });

// export default ExampleScreen;
