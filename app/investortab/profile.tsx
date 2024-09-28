import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InvProfile from '../../components/Investor/InvestorProfile'
import InvestorHeader from '../../components/Investor/InvestorHeader'
import { Colors } from '../../constants/Colors'

export default function InvestorProfile() {
  return (
    <View  style={styles.container}>
      <InvestorHeader/>
      <InvProfile />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})