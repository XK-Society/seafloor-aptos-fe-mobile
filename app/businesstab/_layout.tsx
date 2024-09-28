import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '../../constants/Colors';

export default function BusinessLayout() {
  return (
    <Tabs 
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY,
    }}>
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={30} color={color} />,
            }}
          />
          <Tabs.Screen
            name="dashboard"
            options={{
              title: 'Dashboard',
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={30} color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
            }}
          />
    </Tabs>
  );
}
