import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
    cardNumber: number
}

const Cards = ({cardNumber}: CardProps) => {
  return (
    <View style={styles.card}>
        <View style={styles.row1}>
            <View style={styles.col1}>
                <Text style={styles.mainText}>Fecha de cierre</Text>
                <Text style={styles.mainText}>Estado</Text>
            </View>
            <View style={styles.col1}>
                <Text style={styles.secondaryText}>24 mayo 2023</Text>
                <Text style={[styles.secondaryText]}>PAGADO</Text>
            </View>

        </View>
        <View style={styles.col2}>
            <Text style={styles.priceText}>$ 513.727.999</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: '92%',
        height: 81,
        backgroundColor: 'white',
        marginTop: 11,
        paddingStart: 10,
        paddingEnd: 10,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 8,
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainText: {
        color: 'black',
        marginBottom: 10,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16

    },
    row1: {
        height: '100%',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingEnd: 50,
    },
    col1: {
        height: '100%',
        flex: 1,
    },
    col2: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondaryText: {
        marginBottom: 10,
        color: '#3D3B8E',
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: 16

    },
    priceText: {
        color: '#10058F',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 19
    }
    
});

export default Cards