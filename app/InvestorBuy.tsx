import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InvestorHeader from '../components/Investor/InvestorHeader';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import InTokenDeets from '@/components/InvestToken/InTokenDeets';

export default function InvestorBuy() {
  return (
    <View style={styles.container}>
      <InvestorHeader />
      <InTokenDeets/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})