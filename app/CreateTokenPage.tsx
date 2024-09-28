import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateToken from '../components/Token/CreateToken'
import BusinessHeader from '../components/Business/BusinessHeader'
import { Colors } from '../constants/Colors'

export default function CreateTokenPage() {
  return (
    <View style={styles.container}>
      <BusinessHeader />
      <CreateToken />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
  }
})
