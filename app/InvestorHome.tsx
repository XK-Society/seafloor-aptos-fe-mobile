import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InvestorHeader from '../components/Investor/InvestorHeader';
import { Colors } from '../constants/Colors';
import InTokenList from '../components/InvestToken/InTokenList';
import TokenList from '../components/Token/TokenList';

export default function InvHome() {
  return (
    <View>
      <InvestorHeader />
      <InTokenList/>
    </View>
  );
}

