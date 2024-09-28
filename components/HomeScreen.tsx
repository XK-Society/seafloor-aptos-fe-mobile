import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "../assets/sf-assets/sf-logo-3d.png";
import BusinessIcon from "../assets/sf-assets/business-logo.png";
import InvestorIcon from "../assets/sf-assets/investor-logo.png";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from "react";
import { RootStackParamList } from "../app/types/navigate";
import { Colors } from "../constants/Colors";
import UserTypePopup from "./popup/UserTypePopup";

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<'business' | 'investor' | null>(null);

    const handleCategorySelect = (category: 'business' | 'investor') => {
        setSelectedCategory(category);
        setPopupVisible(true);
    };

    //first time user
    //zkMe 
    const handleFirstTimeUser = () => {
        setPopupVisible(false);
        if (selectedCategory === 'business') {
            navigation.navigate('businesstab');
        } else if (selectedCategory === 'investor') {
            navigation.navigate('investortab');
        }
        console.log(`Selected category: ${selectedCategory} (First Time User)`);
    };

    //existing user
    const handleExistingUser = () => {
        setPopupVisible(false);
        if (selectedCategory === 'business') {
            navigation.navigate('businesstab');
        } else if (selectedCategory === 'investor') {
            navigation.navigate('investortab');
        }
        console.log(`Selected category: ${selectedCategory} (Existing User)`);
    };

    // const handleBusiness = () => {
    //     navigation.navigate('businesstab');
    //     console.log(`Selected category: Business`);
    // };

    // const handleInvestor = () => {
    //     navigation.navigate('investortab');
    //     console.log(`Selected category: Investor`);
    // };

    return (
        <View style={styles.container}>
            <View>
                <Image source={Icon} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleCategorySelect('business')}>
                    <Image source={BusinessIcon} style={styles.icon} />
                    <Text style={styles.buttonText}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => handleCategorySelect('investor')}
                >
                    <Image source={InvestorIcon} style={styles.icon}/>
                    <Text style={styles.buttonText}>Investor</Text>
                </TouchableOpacity>
            </View>
            <UserTypePopup
                visible={popupVisible}
                onClose={() => setPopupVisible(false)}
                onSelectFirstTime={handleFirstTimeUser}
                onSelectExisting={handleExistingUser}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%', // Ensures the container takes full height of the screen
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        backgroundColor: '#fff', // Sets the background color
    },
    
    image: {
        width: 250,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    icon: {
        width: 145,
        height: 75,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%",
        marginTop: 30,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 60,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginHorizontal: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10,
        borderColor: '#ccc',
        borderWidth: 4,
        width: 130,
    },
    buttonText: {
        fontFamily: 'poppins-bold',
        color: "#ffffff",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: -30,
    },
});
