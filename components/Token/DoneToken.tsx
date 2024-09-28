import { Text, View } from 'react-native'
import React from 'react'
import UploadLicense from './CreateToken/LicenseUpload'
import TokenDone from '../popup/TokenDone'

export default function DoneToken() {
  return (
    <View>
      <UploadLicense/>
      <TokenDone/>
    </View>
  )
}
