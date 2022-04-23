import { StyleSheet, Text, View,  TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({width = 100, height = 30, radius = 0, textColor = 'white', textSize= 18, text = 'Button', backgroundColor = '#CBDFE4', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style = {[styles.container,
         {
             width: width,
             height: height,
             backgroundColor: backgroundColor,
             borderRadius: radius,
         }]}>
             <Text style= {{color: textColor, fontSize: textSize}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})