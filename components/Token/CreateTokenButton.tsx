import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import navigation prop
import { RootStackParamList } from '../../app/types/navigate'; // Ensure this exists

const WHALE_COUNT = 10; // Number of whales to animate

interface WhaleProps {
  position: {
    transform: [
      {
        translateX: Animated.AnimatedInterpolation<any>;
      },
      {
        translateY: Animated.AnimatedInterpolation<any>;
      }
    ];
  };
}

const Whale: React.FC<WhaleProps> = ({ position }) => {
  return (
    <Animated.View style={[styles.whale, position]}>
      <Text style={styles.whaleText}>🐋</Text>
    </Animated.View>
  );
};

export default function CreateTokenButton() {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Move navigation inside the component
  const [whales, setWhales] = useState<{ animation: Animated.Value; endPositionX: number; endPositionY: number }[]>([]);

  const handleWhaleAnimation = () => {
    // Trigger whale animation
    const newWhales = Array.from({ length: WHALE_COUNT }).map((_, index) => {
      const animation = new Animated.Value(0);

      // Define angles for neat scattering
      const angle = (index / WHALE_COUNT) * 2 * Math.PI; // Evenly spaced angles
      const radius = Math.random() * 50 + 30; // Random distance for varying effects

      const endPositionX = Math.cos(angle) * radius; // Calculate end X position
      const endPositionY = Math.sin(angle) * radius; // Calculate end Y position

      Animated.timing(animation, {
        toValue: 1,
        duration: 800 + Math.random() * 400, // Random duration for variation
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start(() => {
        // Remove whale from the list after animation
        setWhales(prev => prev.filter(whale => whale.animation !== animation));
      });

      return { animation, endPositionX, endPositionY };
    });
    

    setWhales(newWhales);

    
  };

  const handlePress = () => {
    handleWhaleAnimation(); // Trigger whale animation on close
    setTimeout(() => {
      setModalVisible(false); // Close modal after animation
    }, 1200); // Adjust timing to match the longest animation duration

    // Navigate to CreateToken page
    navigation.navigate('CreateTokenPage');
  };

  return (
    <View style={styles.tokencreatecontainer}>
      {/* Button to Navigate to Create Token Page */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Create Token</Text>
      </TouchableOpacity>

      {whales.map((whale, index) => (
        <Whale
          key={index}
          position={{
            transform: [
              {
                translateX: whale.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, whale.endPositionX], // Move to neat end position
                }),
              },
              {
                translateY: whale.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, whale.endPositionY], // Move to neat end position
                }),
              },
            ],
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tokencreatecontainer: {
    marginTop: 70,
    alignItems: 'center',
    position: 'relative', // Positioning for whales
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    //3d effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  buttonText: {
    color: Colors.PRIMARY,
    fontSize: 15,
    fontFamily: 'poppins-bold',
  },
  whale: {
    position: 'absolute',
    top: '50%', // Center the whale's vertical alignment
    left: '50%', // Center the whale's horizontal alignment
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }], // Center the whale
  },
  whaleText: {
    fontSize: 20, // Size of the whale
  },
});
