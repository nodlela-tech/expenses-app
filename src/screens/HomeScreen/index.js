import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Greeter from './components/greeter'
import styles from './styles'
import CustomInput from '../../components/customInput'
import Spacer from '../../components/spacer'
import Category from './components/category'
import Transaction from './components/transaction'
import values from '../../constants/values'
import { categories, transactions } from '../../constants/data'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.horizontalPaddingView}>
            <Greeter user={{
                    img: 'https://yt3.ggpht.com/ytc/AKedOLTkTJuNwAOnHrFVGRLwbncwovkgiqXjD2ceQYuKDA=s900-c-k-c0x00ffffff-no-rj',
                    name: 'Siviwe'
                    }}
                    />
            <Spacer height={20}/>
            <CustomInput placeholder='Search' icon='search-outline' />
            <Spacer height={20} />
            <Text style={values.h2Style}>Categories</Text>
            <Spacer height={20} />

        </View>
        <View style={{paddingLeft: values.horizontalPadding}}>
            <FlatList
                horizontal
                data={categories}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Category category={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
            />
        </View>

        <View style={styles.horizontalPaddingView}>
            <Spacer height={20} />
            <Text style={values.h2Style}>Transactions History</Text>
            <Spacer height={20} />
            <FlatList
                
                data={transactions}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction transaction={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
            />
        </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen