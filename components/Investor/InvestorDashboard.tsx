import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors'; // Adjust the import path as necessary
import InvestorDashboard from '../../app/investortab/dashboard';

const { width } = Dimensions.get('window');

const InvDashboard: React.FC = () => {
    const tokens = [
        {
            id: 1,
            name: 'Token Name 1',
            description: 'Token Description 1',
            image: 'https://via.placeholder.com/100', // Replace with actual image URL
            totalInvest: '$1000',
        },
        {
            id: 2,
            name: 'Token Name 2',
            description: 'Token Description 2',
            image: 'https://via.placeholder.com/100', // Replace with actual image URL
            totalInvest: '$1500',
        },
        // Add more tokens as needed
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>List of Tokenize</Text>
            {tokens.map(token => (
                <View key={token.id} style={styles.tokenCard}>
                    <Image source={{ uri: token.image }} style={styles.tokenImage} />
                    <View style={styles.tokenInfo}>
                        <Text style={styles.tokenName}>{token.name}</Text>
                        <Text style={styles.tokenDescription}>{token.description}</Text>
                        <Text style={styles.tokenInvest}>{token.totalInvest}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};
// 
export default InvDashboard;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
    tokenCard: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    tokenImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginRight: 20,
    },
    tokenInfo: {
        flex: 1,
    },
    tokenName: {
        fontSize: 18,
        fontFamily: 'poppins-bold',
        color: Colors.PRIMARY, // Change to your desired text color
        marginBottom: 5,
    },
    tokenDescription: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    tokenInvest: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
