import {
  Modal as RNModal,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import colors from "../config/colors";

const Modal = ({ modalVisible, children, setModalVisible }) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={[styles.textStyle, { color: "white" }]}>X</Text>
          </Pressable>
          <View>{children}</View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: "85%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  button: {
    borderRadius: 100,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: colors.DANGER,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -25,
    right: -25,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Modal;
