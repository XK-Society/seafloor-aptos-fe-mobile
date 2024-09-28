import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
const logoImage = require('../../assets/sf-assets/sf-logo-3d.png'); // Adjust the path as necessary

export default function InvestorHeader() {

    return (
        <View style={styles.headercontainer}>
            <View style={styles.headertext}>
              <View style={styles.textLogo}>
              <Image source={logoImage} style={styles.logo} />
                <View>
                    <Text style={styles.welcometext}>Welcome,</Text>
                    <Text style={styles.usernametext}>Investor</Text>
                </View>
              </View>
                <View>
                    <Text style={styles.wallettext}>Wallet ID</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ 
    headercontainer: {
        padding: 35,
        paddingTop: 50,
        paddingBottom: 25,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 8 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 10, 
        elevation: 10, 
    },
    headertext: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    textLogo: {
      flexDirection: "row",
      justifyContent: 'space-between',
      gap: 30,
    },
    logo: {
        width: 80,
        height: 80, 
    },
    welcometext: {
        color: Colors.PRIMARY,
        fontFamily: 'poppins',
    },
    usernametext: {
        fontSize: 19,
        color: Colors.PRIMARY,
        fontFamily: 'poppins-medium',
    },
    wallettext: {
        fontSize: 16,
        color: Colors.PRIMARY,
        fontFamily: 'poppins',
    },
});
