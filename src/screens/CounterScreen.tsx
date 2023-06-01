import React, { useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import FloatingActionButton from '../components/FloatingActionButton';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {counter}
        </Text>
        <FloatingActionButton 
            title={'-1'}
            position='bl'
            onPress={() => setCounter(counter -1)}
        />
        <FloatingActionButton 
            title={'+1'}
            onPress={() => setCounter(counter +1)}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize:40,
        top: -15
    }
})

export default CounterScreen