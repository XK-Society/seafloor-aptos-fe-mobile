import { View, Text } from 'react-native'
import React from 'react'
import InvProfile from '../../components/Investor/InvestorProfile'
import InvestorHeader from '../../components/Investor/InvestorHeader'

export default function InvestorProfile() {
  return (
    <View>
      <InvestorHeader/>
      <InvProfile />
    </View>
  )
}