import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InvestorLayout from './_layout'
import InvHome from '../../app/InvestorHome'
import InvestorHeader from '../../components/Investor/InvestorHeader'
import { Colors } from '../../constants/Colors'

export default function InvestorHome() {
  return (
    <View style={styles.container}>
      <InvestorHeader />
      <InvHome />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})