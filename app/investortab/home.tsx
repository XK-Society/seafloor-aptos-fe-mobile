import { View, Text } from 'react-native'
import React from 'react'
import InvestorLayout from './_layout'
import InvHome from '../../app/InvestorHome'
import InvestorHeader from '../../components/Investor/InvestorHeader'

export default function InvestorHome() {
  return (
    <View>
      <InvestorHeader />
      <InvHome />
    </View>
  )
}