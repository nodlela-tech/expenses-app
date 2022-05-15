import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
const { width } = Dimensions.get("screen")
const CardItem = (props) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={[styles.container, {backgroundColor: props.data.backgroundColor}]}>
        <View>
            <Image source={props.data.img}  style={styles.img} />
        </View>
        <View>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.price}>{props.data.price}</Text>
        </View>
        <View>
            <Text style={styles.cardNum}>{props.data.cardNum}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardItem

const styles = StyleSheet.create({
    container: {
        width: width * 0.40,
        height: 180,
        borderRadius: 15,
        marginRight: 10,
        padding: 10,
        justifyContent: 'space-between'
    },
    img: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end'
    },
    balance: {
        fontSize: 12,
        color: 'grey',
    },
    price: {
        fontWeight: 'bold',
    },
    cardNum: {
        fontSize: 10,
    }
})