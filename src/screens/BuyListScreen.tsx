import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Cards from '../components/Cards';

const BuyListScreen = () => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Lista de compras</Text>
        </View>
        <ScrollView style={styles.cardList}>
            <View style={styles.cardContainer}>
            {
                Array.from({ length: 15 }).map((_, index) => (
                    <Cards cardNumber={index} />
                ))
            }
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 72,
        backgroundColor: '#FC2256',
        justifyContent: 'center',
        alignItems: 'center',
        
    }, 
    cardList: {
        flexGrow: 1,
        backgroundColor: '#d9d9d9',

    },
    cardContainer: {
        marginBottom: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
        lineHeight: 16,

    }
});

export default BuyListScreen