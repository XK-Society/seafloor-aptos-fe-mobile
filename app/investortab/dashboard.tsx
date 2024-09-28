import { View, Text } from 'react-native'
import React from 'react'
import InvDashboard from '../../components/Investor/InvestorDashboard'
import InvestorHeader from '../../components/Investor/InvestorHeader'

export default function InvestorDashboard() {
  return (
    <View>
      <InvestorHeader />
      <InvDashboard />
    </View>
  )
}