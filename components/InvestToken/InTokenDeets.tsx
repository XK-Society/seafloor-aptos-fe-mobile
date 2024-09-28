import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types/navigate';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

interface Token {
    id: number;
    name: string;
    price: string;
    image: string;
}

const { width } = Dimensions.get('window');

const InTokenDeets2: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'InTokenDeets'>>();
    const navigation = useNavigation(); // Use the navigation hook
    const { token } = route.params; // Access the token parameter

    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

    const handleBuyPress = () => {
        setModalVisible(true); // Show the modal when Buy button is pressed
    };

    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    const handleConfirmPurchase = () => {
        // Handle the confirm purchase action here
        console.log('Confirmed purchase for:', token.name);
        setModalVisible(false); // Close the modal after confirmation
    };

    const handleCancelPurchase = () => {
        setModalVisible(false); // Close the modal without confirmation
    };

    return (
        <View style={styles.container}>
            <Text style={styles.investText}>Invest in {token.name}</Text>
            <View style={styles.primaryContainer}>
                <Image source={{ uri: token.image }} style={styles.tokenImage} />
                <Text style={styles.tokenName}>{token.name}</Text>
                <Text style={styles.tokenDescription}>{token.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleBuyPress}>
                    <Text style={styles.buttonText}>Buy!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBackPress}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for Purchase Confirmation */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Close modal on back press
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Confirm Purchase</Text>
                        <Text style={styles.modalMessage}>
                            Are you sure you want to buy {token.name} for {token.price}?
                        </Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleConfirmPurchase}>
                                <Text style={styles.modalButtonText}>Transaction Link</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, styles.DoneButton]} onPress={handleCancelPurchase}>
                                <Text style={styles.modalButtonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default InTokenDeets2;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    },
    investText: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30,
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY,
        textAlign: 'center',
    },
    primaryContainer: {
        width: width * 0.85,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tokenImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
    },
    tokenName: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        marginBottom: 10,
        color: Colors.PRIMARY,
    },
    tokenDescription: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'volte',
        marginBottom: 20,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    backButton: {
        backgroundColor: '#aaa', // Different color for the Back button
    },
    buttonText: {
        color: Colors.PRIMARY,
        fontSize: 18,
        fontFamily: 'poppins-bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: width * 0.85,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY,
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },
    modalButtonContainer: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    modalButton: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        paddingVertical: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 10,
    },
    DoneButton: {
        backgroundColor: '#aaa', 
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'poppins-bold',
    },
});
