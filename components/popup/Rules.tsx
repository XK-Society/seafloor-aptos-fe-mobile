import { Animated, Easing, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';

// TODO: Whale animation fix

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

export default function Rules() {
  const [modalVisible, setModalVisible] = useState(true);
  const [whales, setWhales] = useState<{ animation: Animated.Value; endPositionX: number; endPositionY: number }[]>([]);

  const handleClose = () => {
    handleWhaleAnimation(); // Trigger whale animation on close
    setTimeout(() => {
      setModalVisible(false); // Close modal after animation
    }, 1200); // Adjust timing to match the longest animation duration
  };


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

  return (
    <View>
      {/* Rules popup */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Token Creation Rules</Text>
            <Text style={styles.ruleText}>1. Rule one description.</Text>
            <Text style={styles.ruleText}>2. Rule two description.</Text>
            <Text style={styles.ruleText}>3. Rule three description.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a dark background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'poppins-bold',
    fontSize: 20,
    color: Colors.PRIMARY,
  },
  ruleText: {
    fontFamily: 'poppins',
    marginVertical: 5,
    textAlign: 'left',
    fontSize: 17,
  },
  closeButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    position: 'relative',
    // 3D effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  closeButtonText: {
    fontFamily: 'poppins-bold',
    color: '#fff',
    fontSize: 15,
  },
  whale: {
    position: 'absolute',
    top: '10%', // Center the whale's vertical alignment
    left: '50%', // Center the whale's horizontal alignment
    transform: [{ translateX: 0 }, { translateY: -12.5 }], // Center the whale
  },
  whaleText: {
    fontSize: 20, // Size of the whale
  },
});
