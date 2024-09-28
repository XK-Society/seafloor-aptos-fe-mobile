import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
      {/*Business Tabs layout */}
      <Stack.Screen name="businesstab" options={{title: 'Business'}} />
      {/* Investor Tabs layout*/}
      <Stack.Screen name="investortab" options={{title: 'Investor'}} />
    </Stack>
  )
}