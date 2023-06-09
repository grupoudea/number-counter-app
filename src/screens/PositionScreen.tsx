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
        <View style={styles.cajaNaranja}>
            <Text style={styles.title}>A2</Text>
            <Text style={styles.title}>B2</Text>
            <Text style={styles.title}>C2</Text>
        </View>
        <View style={styles.cajaVerde}>
            <Text style={styles.title}>A3</Text>
            <Text style={styles.title}>B3</Text>
            <Text style={styles.title}>C3</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#28c4d9',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    cajaRoja: {
        width: '100%',
        height: 100,
        backgroundColor: 'red',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cajaNaranja: {
        width:  '100%',
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cajaVerde: {
        width:  '100%',
        height: 100,
        backgroundColor: 'green',
        borderWidth: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        width: 25,
        height: 25,
        backgroundColor: '#d4d4d4',
        borderWidth: 1,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    }
    
});

export default PositionScreen