import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../app/types/navigate';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

interface Token {
    id: number;
    name: string;
    price: string;
    image: string;
}

const { width } = Dimensions.get('window');

const InTokenDeets2: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'InTokenDeets'>>();
    const navigation = useNavigation();
    const { token } = route.params;

    const [modalVisible, setModalVisible] = useState(false);

    const handleBuyPress = () => {
        console.log('Confirmed purchase for:', token.name);
        setModalVisible(true);
    };

    const handleBackPress = () => {
        setModalVisible(false); // Navigate to "InvestorDashboard
    };

    const handleConfirmPurchase = () => {
        setModalVisible(false);
    };

    const handleDonePurchase = () => {
        setModalVisible(false);
        navigation.navigate('InvestorDash');
    };

    return (
        <View style={styles.container}>
            <View style={styles.primaryContainer}>
            <Text style={styles.titleText}>Tokenize Information</Text>
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
                onRequestClose={() => setModalVisible(false)}
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
                            <TouchableOpacity style={[styles.modalButton, styles.DoneButton]} onPress={handleDonePurchase}>
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
        marginTop: 80,
        // backgroundColor: Colors.PRIMARY, // Dark blue background
    },
    titleText: {
        fontSize: 26, // Larger font for title
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY, // Primary color for title
        textAlign: 'center',
        marginBottom: 40,
    },
    primaryContainer: {
        width: width * 0.85,
        backgroundColor: '#fff', // White background for the card
        paddingVertical: 40, // Double the padding for height increase
        paddingHorizontal: 15,
        borderRadius: 20, // Increased roundness
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, // A bit more pronounced shadow
        shadowRadius: 4,
        elevation: 6, // Adjust elevation for better shadow
    },
    tokenImage: {
        width: 120, // Reduced size to match image
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000', // Shadow effect for image
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    tokenName: {
        fontSize: 22, // Font size similar to image
        fontFamily: 'poppins-bold',
        marginBottom: 5, // Less margin
        color: Colors.PRIMARY, // Dark blue color for contrast
        textAlign: 'center',
    },
    tokenDescription: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'volte',
        marginBottom: 5, // Adjust margin for tight spacing
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 10, // Slight padding to fit
        marginTop: 30, // Increase margin between card and buttons
    },
    button: {
        flex: 1,
        backgroundColor: '#fff', // Primary color for button background
        borderRadius: 25, // Rounder buttons
        paddingVertical: 12, // Increased padding for button height
        alignItems: 'center',
        marginHorizontal: 10,
        shadowColor: '#000', // Button shadow for elevation effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4, // Button elevation
    },
    backButton: {
        backgroundColor: '#fff', // White background for back button
    },
    buttonText: {
        color: Colors.PRIMARY, // White text color for button
        fontSize: 18,
        fontFamily: 'poppins-bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: width * 0.85,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY,
        marginBottom: 15,
    },
    modalMessage: {
        fontSize: 16,
        fontFamily: 'volte',
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: 'center',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'poppins-bold',
    },
    DoneButton: {
        backgroundColor: '#aaa', // Lighter button color for Done
    },
});
