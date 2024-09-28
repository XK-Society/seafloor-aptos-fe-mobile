import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


interface UserTypePopupProps {
  visible: boolean;
  onClose: () => void;
  onSelectFirstTime: () => void;
  onSelectExisting: () => void;
}

const { width } = Dimensions.get('window');

const UserTypePopup: React.FC<UserTypePopupProps> = ({
  visible,
  onClose,
  onSelectFirstTime,
  onSelectExisting,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Welcome!</Text>
          {/* <Text style={styles.modalText}>Please select your user type:</Text> */}
          
          <TouchableOpacity
            style={[styles.button, styles.buttonFirstTime]}
            onPress={onSelectFirstTime}
          >
            <Text style={styles.buttonText}>First Time User</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.buttonExisting]}
            onPress={onSelectExisting}
          >
            <Text style={styles.buttonText}>Existing User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'poppins-bold',
    marginBottom: 15,
    color: Colors.PRIMARY,
  },
//   modalText: {
//     marginBottom: 20,
//     textAlign: 'center',
//     fontSize: 16,
//   },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  buttonFirstTime: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonExisting: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'poppins-bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default UserTypePopup;