import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InvestorHeader from '../components/Investor/InvestorHeader';
import { Colors } from '../constants/Colors';
import InvestorDashboard from '../app/investortab/dashboard';

export default function InvestorTokenize() {
  return (
    <View style={styles.container}>
        <InvestorDashboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})