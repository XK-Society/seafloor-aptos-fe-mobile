// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { Colors } from '@/constants/Colors';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '@/app/types/navigate';

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

// Define the Token type
// interface Token {
//   id: number;
//   name: string;
//   image: string;
// }

// Sample tokens with images
// const tokens: Token[] = [
//   { id: 1, name: 'Token 1', description: 'Lorem ipsum meow meow',image: 'https://via.placeholder.com/50' },
//   { id: 2, name: 'Token 2', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
//   { id: 3, name: 'Token 3', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
//   { id: 4, name: 'Token 4', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
//   { id: 5, name: 'Token 5', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
//   { id: 6, name: 'Token 6', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
// ];



interface Token {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface TokenListProps {
  tokens?: Token[];
}

const { width, height } = Dimensions.get('window');

const defaultTokens: Token[] = [
  { id: 1, name: 'Token 1', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Token 2', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Token 3', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Token 4', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
  { id: 5, name: 'Token 5', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
  { id: 6, name: 'Token 6', description: 'Lorem ipsum meow meow', image: 'https://via.placeholder.com/50' },
];

const TokenList: React.FC<TokenListProps> = ({ tokens = defaultTokens }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    slideAnim.setValue(width);
    Animated.spring(slideAnim, {
      toValue: 0,
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

  return (
    <View style={styles.container}>
      {/* Grid Background */}
      <View style={styles.gridBackground} />
      <Text style={styles.tokentitle}>List Of Token</Text>
      {/* Token Display */}
      <Animated.View 
        style={[
          styles.tokenContainer,
          { transform: [{ translateX: slideAnim }] }
        ]}
      >
        <Image source={{ uri: tokens[currentIndex].image }} style={styles.tokenImage} />
        <Text style={styles.tokenName}>{tokens[currentIndex].name}</Text>
        <Text style={styles.tokenDescription}>{tokens[currentIndex].description}</Text>
      </Animated.View>

      {/* Navigation Arrows */}
      <TouchableOpacity style={[styles.arrowButton, styles.leftArrow]} onPress={goToPrevious}>
        <Ionicons name="chevron-back" size={30} color={Colors.PRIMARY} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.arrowButton, styles.rightArrow]} onPress={goToNext}>
        <Ionicons name="chevron-forward" size={30} color={Colors.PRIMARY}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 200,
  },
  gridBackground: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    opacity: 0.5,
  },
  tokentitle: {
    fontSize: 24,
    fontFamily: 'poppins-bold',
    marginBottom: 10,
    color: '#fff'
  },
  tokenContainer: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    //width: width * 0.8,
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
  },
  tokenDescription: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'volte',
    marginBottom: 40,
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
  },
  leftArrow: {
    left: 30,
  },
  rightArrow: {
    right: 30,
  },
});

export default TokenList;

// export default function TokenList() {
//   //const navigation = useNavigation();
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   // Function to render a token item
//   const renderItem = (item: Token) => (
//     <TouchableOpacity
//       style={styles.tokenbox}
//       onPress={() => handleTokenPress(item.id)} // Pass the token ID to the navigation function
//     >
//       <Image source={{ uri: item.image }} style={styles.tokenImage} />
//       <View style={styles.tokenInfo}>
//         <Text style={styles.tokenboxtext}>{item.name}</Text>
//         <Text style={styles.tokenIdtext}>ID: {item.id}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const handleTokenPress = (id: number) => {
//     // Navigate to the information page with the token ID as a parameter
//     navigation.navigate('TokenInformation', { tokenId: id });
//   };

//   const createRows = () => {
//     const rows = [];
//     for (let i = 0; i < tokens.length; i += 2) {
//       rows.push(
//         <View style={styles.row} key={i}>
//           {renderItem(tokens[i])}
//           {tokens[i + 1] && renderItem(tokens[i + 1])}
//         </View>
//       );
//     }
//     return rows;
//   };

//   return (
//     <View style={styles.tokenlistcontainer}>
//       {/* Container for "List of Tokens" and "View All" */}
//       <View style={styles.headerRow}>
//         <Text style={styles.tokenlisttext}>List of Tokens</Text>
//         <Text style={styles.viewtext}>View All</Text>
//       </View>

//       {/* Token Boxes Centered and Spaced Down */}
//       <View style={styles.flatListContainer}>
//         {createRows()}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tokenlistcontainer: {
//     padding: 20,
//     margin: 40,
//     marginTop: 90,
//     marginBottom: 400,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   tokenlisttext: {
//     color: Colors.PRIMARY,
//     fontSize: 20,
//     fontFamily: 'poppins-bold',
//   },
//   viewtext: {
//     color: Colors.PRIMARY,
//     fontFamily: 'poppins-medium',
//     fontSize: 16,
//   },
//   flatListContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   row: {
//     flexDirection: 'row', // Align token boxes in a row
//     justifyContent: 'space-between', // Space between boxes
//     width: '100%', // Take full width
//   },
//   tokenbox: {
//     backgroundColor: '#fff',
//     padding: 15,
//     margin: 5, // Adjust margin for spacing
//     borderRadius: 10,
//     width: '45%', // Adjust the width to fit two boxes in a row
//     flexDirection: 'row',
//     alignItems: 'center',
//     // 3D effect
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//   },
//   tokenImage: {
//     width: 50,
//     height: 50,
//     marginRight: 10, // Space between the image and the text
//   },
//   tokenInfo: {
//     flex: 1, // Allow text container to take remaining space
//   },
//   tokenboxtext: {
//     color: Colors.PRIMARY,
//     fontSize: 18,
//     textAlign: 'left',
//     fontFamily: 'poppins-bold',
//   },
//   tokenIdtext: {
//     color: Colors.PRIMARY,
//     fontSize: 14,
//     textAlign: 'left',
//     fontFamily: 'poppins',
//   },
// });