import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from './components/header'
import Transfer from './components/transfer'
import { transfer, cards } from '../../constants/data'
import Spacer from '../../components/spacer'
import Cards from './components/cards'
import CustomButton from '../../components/customButton'
import colors from '../../constants/colors'
const { width } = Dimensions.get("screen")
const TransferScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.horizontalPaddingView}>
            <Header />
            <ScrollView>
                <Spacer height={20} />
                <Transfer data={ transfer } />
                <Spacer height={20} />
                <Cards data = {cards} />
                <Spacer height={20} />
                <View style={ styles.btnContainer}>
                <CustomButton 
                    width={width * 0.7} 
                    height={40} 
                    radius={5} 
                    textSize={18} 
                    text='Proceed'
                    backgroundColor={colors.orage}
                    onPress={() => {}}
                    />
                </View>
            </ScrollView>
        </View>
      
    </View>
  )
}

export default TransferScreen