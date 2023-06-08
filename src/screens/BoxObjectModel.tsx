import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    title: {
        fontSize: 24,
        padding: 40,
        marginHorizontal: 20,
        backgroundColor: 'red',
        //width: 150,
        borderWidth: 10
    }
});

export default BoxObjectModel