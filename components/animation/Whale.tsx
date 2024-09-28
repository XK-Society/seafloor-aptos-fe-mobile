import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import React, { useState, useImperativeHandle, forwardRef } from 'react';

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

// Forward ref to WhaleAnimation
const WhaleAnimation = forwardRef((_, ref) => {
  const [whales, setWhales] = useState<{ animation: Animated.Value; endPositionX: number; endPositionY: number }[]>([]);

  // Trigger whale animation
  const triggerAnimation = () => {
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

  useImperativeHandle(ref, () => ({
    triggerAnimation,
  }));

  return (
    <View>
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
});

export default WhaleAnimation;

const styles = StyleSheet.create({
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
