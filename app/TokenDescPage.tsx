import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TokenDesc from '../components/Token/CreateToken/TokenDesc'
import BusinessHeader from '../components/Business/BusinessHeader'
import { Colors } from '../constants/Colors'

export default function TokenDescPage() {
  return (
    <View style={styles.container}>
      <BusinessHeader />
      <TokenDesc />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    }
  })