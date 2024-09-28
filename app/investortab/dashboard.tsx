import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InvDashboard from '../../components/Investor/InvestorDashboard'
import InvestorHeader from '../../components/Investor/InvestorHeader'
import { Colors } from '../../constants/Colors'

export default function InvestorDashboard() {
  return (
    <View style={styles.container}>
      <InvestorHeader />
      <InvDashboard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})