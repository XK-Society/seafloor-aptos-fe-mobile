import { Image, StyleSheet, View } from "react-native";
import Icon from "../assets/sf-assets/sf-logo-3d.png";
import React from "react";


export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <View>
            <Image source={Icon} style={styles.image}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    image: {
        width: 350,
        height: 300,
        resizeMode: "cover",
    }
});

