import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Business/BusinessHeader'
import CreateTokenButton from '../components/Token/CreateTokenButton'
import TokenList from '../components/Token/TokenList'
import { Colors } from '@/constants/Colors'

export default function BusinessHomepage() {
  return (
    //Business HomePage
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Create Token Button */}
      <CreateTokenButton />

      {/* Token List */}
      <TokenList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})