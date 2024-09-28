import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
    // const {user}=useUser();

    return (
    <View style={styles.headercontainer}>
      <View style={styles.headertext}>
        {/* Welcome text and username */}
        <View>
            <Text style={styles.welcometext}>Welcome,</Text>
            <Text style={styles.usernametext}>Business</Text>
        </View>

        {/* Wallet ID*/}
        <View>
          <Text style={styles.wallettext}>Wallet ID</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({ 
  headercontainer: {
    padding: 35,
    paddingTop: 50,
    paddingBottom: 25,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    // Shadow to create 3D effect
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 8 }, // The shadow is placed under the header
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 10, // Blur radius of the shadow
    elevation: 10, // Elevation for Android to give 3D effect
  },
  headertext: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
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