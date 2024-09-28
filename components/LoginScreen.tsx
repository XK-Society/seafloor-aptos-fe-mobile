import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import GmailIcon from '../assets/sf-assets/gmail.png'; // Placeholder icon
import PetraWalletIcon from '../assets/sf-assets/petrawallet.png'; // Placeholder icon
import Logo from "../assets/sf-assets/sf-logo-3d.png";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../app/types/navigate";

export default function LoginScreen() {
    const handleGmailLogin = () => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
        console.log('Gmail login pressed');
        // Handle Gmail login logic here
        navigation.navigate('HomeScreenApp');
    };

    const handlePetraWalletLogin = () => {
        console.log('Petra Wallet login pressed');
        // Handle Petra Wallet login logic here
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} /> {/* App logo */}
            <Text style={styles.title}>Login</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleGmailLogin}>
                <Image source={GmailIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handlePetraWalletLogin}>
                <Image source={PetraWalletIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Login with Petra Wallet</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        padding: 20,
    },
    logo: {
        width: 150,  // Adjust the width based on your design
        height: 150, // Adjust the height based on your design
        marginBottom: 20,
        resizeMode: 'contain', // Ensures the logo maintains its aspect ratio
    },
    title: {
        fontSize: 28,
        fontFamily: 'poppins-bold',
        marginBottom: 40,
        color: Colors.PRIMARY,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        color: Colors.PRIMARY,
        fontFamily: 'poppins',
    },
});
