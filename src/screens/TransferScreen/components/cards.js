import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'
import CardItem from './cardItem'

const Cards = (props) => {
  return (
    <View>
      <Text style={styles.cards}>Your Cards</Text>
      <FlatList
                horizontal
                data={props.data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardItem data = {item} />}
            />
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    cards: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})