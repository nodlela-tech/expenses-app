import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import Spacer from './spacer'

const CustomInput = ({placeholder = 'Enter', icon}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color='grey' />
      <Spacer width={10}/>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        paddingLeft: 15,
    },
    input: {
        width: '100%',
        height: '100%',
    }
})