import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types/navigate';

export default function TokenDone() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
  const [successModalVisible, setSuccessModalVisible] = useState(false); 

  const handleCloseSuccessModal = () => {
    setSuccessModalVisible(false);
    navigation.navigate('BusinessHomepage');
  };

  return (
    <View style={styles.container}>
      {/* Success popup */}
      <Modal animationType="slide" transparent={true} visible={successModalVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Token successfully created!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseSuccessModal}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a dark background
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 40,
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
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: 'poppins-bold',
        fontSize: 20,
        color: Colors.PRIMARY,
    },
    closeButton: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        //3d effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    closeButtonText: {
        fontFamily: 'poppins-bold',
        color: '#fff',
        fontSize: 15,
    },
})