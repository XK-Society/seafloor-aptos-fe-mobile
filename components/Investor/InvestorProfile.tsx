import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors'; // Adjust the import path as necessary

const { width } = Dimensions.get('window');

const InvestorProfile: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <View style={styles.whiteContainer}>
                <Text style={styles.labelText}>Wallet</Text>
                <Text style={styles.descriptionText}>abcdeffh1223.</Text>
                <Text style={styles.labelText}>Invest Total</Text>
                <Text style={styles.descriptionText}>0.01 USDC.</Text>
            </View>
        </ScrollView>
    );
};

export default InvestorProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY, // Change to your primary background color
        padding: 20,
    },
    header: {
        fontSize: 26,
        fontFamily: 'poppins-bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    whiteContainer: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        alignSelf: 'center', // Center the container horizontally
    },
    labelText: {
        fontSize: 18, // Larger font size for labels
        fontFamily: 'poppins-bold', // Optional: bold font for emphasis
        color: Colors.PRIMARY, // Use primary color for labels
        textAlign: 'center', // Center the label text
        marginBottom: 5, // Adjust margin as needed
    },
    descriptionText: {
        fontSize: 16, // Regular size for descriptions
        color: '#333',
        textAlign: 'center', // Center the description text
        marginBottom: 10, // Adjust margin as needed
    },
});
