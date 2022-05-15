import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import TransferItem from './transferItem'
import Spacer from '../../../components/spacer'
import { Ionicons } from '@expo/vector-icons';

const Transfer = (props) => {
  return (
    <View>
      <TransferItem data = { props.data[0] } />
      <Spacer height={5} />
      <View style={ styles.icon }>
        <Ionicons name="chevron-down-outline" size={15} color='white' />
      </View>
      <TransferItem data = { props.data[1] } />
    </View>
  )
}

export default Transfer

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        position: 'absolute',
        top: 74,
        zIndex: 100,
        right: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})