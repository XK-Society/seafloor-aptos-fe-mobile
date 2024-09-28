import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/app/types/navigate';

interface Token {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface TokenListProps {
    tokens?: Token[];
}

const { width, height } = Dimensions.get('window');

const defaultTokens: Token[] = [
    { id: 1, name: 'Token 1', price: 'Token price', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Token 2', price: 'Token price', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Token 3', price: 'Token price', image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Token 4', price: 'Token price', image: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Token 5', price: 'Token price', image: 'https://via.placeholder.com/50' },
    { id: 6, name: 'Token 6', price: 'Token price', image: 'https://via.placeholder.com/50' },
];

const InTokenList: React.FC<TokenListProps> = ({ tokens = defaultTokens }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        Animated.spring(slideAnim, {
            toValue: -currentIndex * width,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
        }).start();
    }, [currentIndex]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : tokens.length - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < tokens.length - 1 ? prevIndex + 1 : 0));
    };

    // const handleButtonPress = (token: Token) => {
    //     navigation.navigate('InvestorTokenize', { token });
    //     console.log(`Click Details Token ${token.id}`);
    // };

    const handleButtonPress2 = (token: Token) => {
        navigation.navigate('InvestorBuy',{ token });
        console.log(`Click Details Token ${token.id}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.investText}>Invest in Interested Business!</Text>
            <View style={styles.primaryContainer}>
                <Text style={styles.tokentitle}>List Of Tokens</Text>
                <View style={styles.tokenContainer}>
                    <Animated.View
                        style={[
                            styles.tokenSlider,
                            { transform: [{ translateX: slideAnim }] },
                        ]}
                    >
                        {tokens.map((token) => (
                            <View key={token.id} style={styles.tokenItem}>
                                <Image source={{ uri: token.image }} style={styles.tokenImage} />
                                <Text style={styles.tokenName}>{token.name}</Text>
                                <Text style={styles.tokenDescription}>{token.price}</Text>
                                {/* <TouchableOpacity
                                    style={styles.tokenButton}
                                    onPress={() => handleButtonPress(token)}
                                >
                                    <Text style={styles.buttonText}>Detail</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity
                                    style={styles.tokenButton}
                                    onPress={() => handleButtonPress2(token)}
                                >
                                    <Text style={styles.buttonText}>Detail</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </Animated.View>

                    <View style={styles.arrowsContainer}>
                        <TouchableOpacity style={[styles.arrowButton, styles.leftArrow]} onPress={goToPrevious}>
                            <Ionicons name="chevron-back" size={30} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.arrowButton, styles.rightArrow]} onPress={goToNext}>
                            <Ionicons name="chevron-forward" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InTokenList;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    investText: {
        marginTop: 40,
        marginBottom: 40,
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
    tokentitle: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        marginBottom: 10,
        color: Colors.PRIMARY,
    },
    tokenContainer: {
        height: height * 0.5,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: 20,
    },
    tokenSlider: {
        flexDirection: 'row',
        width: width,
    },
    tokenItem: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tokenImage: {
        width: 100,
        height: 100,
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
    tokenButton: {
        marginTop: 50,
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'poppins-bold',
    },
    arrowsContainer: {
        position: 'absolute',
        width: '100%',
        top: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    arrowButton: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 25,
        padding: 10,
    },
    leftArrow: {},
    rightArrow: {},
});
