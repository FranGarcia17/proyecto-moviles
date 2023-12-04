import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import ImageViewer from "react-native-image-pan-zoom/built/image-zoom/image-zoom.component";

const Ruta = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Text style={styles.text}>{props.titulo}</Text>
      <Text style={styles.text}>{props.url}</Text>
      <TouchableWithoutFeedback onPress={handleImagePress}>
        <Image source={props.source} style={{ width: 350, height: 150, objectFit: "fill" }} />
      </TouchableWithoutFeedback>


      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={styles.modalContent}>
              <Text style={styles.text}>{props.titulo}</Text>
              <Text style={styles.text}>{props.url}</Text>
              <Image source={props.source} style={styles.modalImage}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  modalContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent : {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10
  },
  modalImage : {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});

export default Ruta;
