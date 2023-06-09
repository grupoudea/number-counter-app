import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaRoja}>
            <Text style={styles.title}>A</Text>
            <Text style={styles.title}>B</Text>
            <Text style={styles.title}>C</Text>
        </View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaVerde}></View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#28c4d9',
        justifyContent: 'space-evenly',
        //alignItems: 'center',
    },
    cajaRoja: {
        width: '100%',
        height: 100,
        backgroundColor: 'red',
        borderWidth: 1,
    },
    cajaNaranja: {
        width:  '100%',
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 1,
    },
    cajaVerde: {
        width:  '100%',
        height: 100,
        backgroundColor: 'green',
        borderWidth: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 10,
    }
    
});

export default PositionScreen