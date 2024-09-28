import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, ProgressBarAndroid, TextInput, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';  // Define your Colors object as needed
import { RootStackParamList } from '@/app/types/navigate';
import WhaleAnimation from '../../animation/Whale'; 

// Define the type for WhaleAnimation ref
type WhaleAnimationRef = {
    triggerAnimation: () => void;
};


export default function TokenDesc() {
    const [description, setDescription] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [successModalVisible, setSuccessModalVisible] = useState(false); // State for modal visibility

    const whaleRef = useRef<WhaleAnimationRef>(null); // Create a ref to WhaleAnimation component

    // Navigate to the next step
    const handleNextStep = () => {
        setSuccessModalVisible(true); // Show the modal when "Done" is clicked
    };

    // Submit Token
     const handleSubmit = () => {
         console.log('Token Created with description:', description);
     };

     const handleCloseSuccessModal = () => {
        setSuccessModalVisible(false);
        whaleRef.current?.triggerAnimation(); // Trigger the whale animation
        setTimeout(() => {
            navigation.navigate('BusinessHomepage'); // Navigate after the animation
        }, 1000); // Adjust the delay to match the animation duration
    };

    return (
        <View style={styles.desccontainer}>
            <Text style={styles.title}>Image Description</Text>

            {/* Progress Bar (40%) */}
            <View style={styles.progressBarContainer}>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.4}
                        color={Colors.PRIMARY}
                        style={styles.progressBar}
                    />
                <Text style={styles.progressText}>40% Completed</Text>
            </View>

            {/* Business Description */}
             <TextInput
                 style={styles.descriptionInput}
                 placeholder="Business Description"
                 placeholderTextColor="white"
                 multiline
                 numberOfLines={4}
                 value={description}
                 onChangeText={setDescription}
             />

             {/* Submit Business Description */}
             <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                 <Text style={styles.submitButtonText}>Submit</Text>
             </TouchableOpacity>
            {/* Done Button */}
            <TouchableOpacity style={styles.doneButton} onPress={handleNextStep}>
                <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>

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

            {/* Whale Animation */}
            <WhaleAnimation ref={whaleRef} />
        </View>
    );
}

const styles = StyleSheet.create({
    desccontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        marginTop: 20,
        color: '#fff',
    },
    descriptionInput: {
        height: 100,
        width: '80%',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 25,
        padding: 10,
        //marginTop: 20,
        fontFamily: 'poppins',
        textAlignVertical: 'center',
    },
    submitButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '50%',
        marginTop: 30,
    },          
    submitButtonText: {
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: Colors.PRIMARY,
    },          
    progressBarContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 90,
    },
    progressBar: {
        width: '100%',
        height: 10,
        borderRadius: 5,
        color: '#fff',
    },
    progressText: {
        marginTop: 10,
        fontFamily: 'poppins',
        fontSize: 14,
        color: '#fff',
    },
    doneButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '40%',
        marginTop: 20,
    },
    doneButtonText: {
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY,
        fontSize: 16,
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
});
