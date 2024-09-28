import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import GmailIcon from '../assets/sf-assets/gmail.png'; // Placeholder icon
import PetraWalletIcon from '../assets/sf-assets/petrawallet.png'; // Placeholder icon
import Logo from "../assets/sf-assets/sf-logo-3d.png";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../app/types/navigate";

export default function LoginScreen() {
    
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 

    const handleGmailLogin = () => {
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
            <Image source={Logo} style={styles.logo} /> 
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
        backgroundColor: Colors.background,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        marginVertical: 10,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
    },
});
