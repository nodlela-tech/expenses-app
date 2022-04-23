import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../../../constants/colors'
import values from '../../../constants/values'
import CustomButton from '../../../components/customButton'

const Transaction = ({transaction, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
          <View style={[styles.imageContainer, { backgroundColor: transaction.backgroundColor}]}>
              <Image style={styles.image} source={transaction.img} />
          </View>
          <View>
              <Text style={values.pStyle}>{transaction.heading}</Text>
              <Text style={values.h2Style}>-{transaction.price}</Text>
          </View>
      </View>
      <CustomButton 
        width={52} 
        height={25} 
        radius={5} 
        textSize={12} 
        text='Details'
        backgroundColor={colors.orage}
        onPress={() => onPress(transaction.heading)}
         />
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 70,
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingEnd: 15,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    image: {
      width: 35,
      height: 35,
    },
    imageContainer: {
      height: 50,
      width: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    }
})