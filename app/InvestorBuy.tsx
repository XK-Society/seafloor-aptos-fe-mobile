import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InvestorHeader from '../components/Investor/InvestorHeader';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import InTokenDeets from '../components/InvestToken/InTokenDeets';
import InvestorLayout from './investortab/_layout';
import InvestorDashboard from './investortab/dashboard';

export default function InvestorBuy() {
  return (
    <View style={styles.container}>
      <InvestorHeader />
      <InTokenDeets/>
      <InvestorLayout/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})