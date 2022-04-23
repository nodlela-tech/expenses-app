import { View } from 'react-native'
import React from 'react'

const Spacer = ({width = 0, height = 0}) => {
  return (
    <View style={{width: width, height: height}}></View>
  )
}

export default Spacer