import React from 'react'
import CounterScreen from './src/screens/CounterScreen'
import BoxObjectModel from './src/screens/BoxObjectModel'
import { SafeAreaView } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BoxObjectModel />
    </SafeAreaView>
  )
}

export default App