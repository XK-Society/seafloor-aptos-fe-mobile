import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InvestorHeader from '../components/Investor/InvestorHeader';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import InTokenList from '../components/InvestToken/InTokenList';
import TokenList from '../components/Token/TokenList';

export default function InvHome() {
  return (
    <View style={styles.container}>
      <InvestorHeader />
      <InTokenList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  }
})