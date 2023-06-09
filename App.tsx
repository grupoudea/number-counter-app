import React from 'react'
import CounterScreen from './src/screens/CounterScreen'
import BoxObjectModel from './src/screens/BoxObjectModel'
import { SafeAreaView } from 'react-native'
import DimensionsScreen from './src/screens/DimensionsScreen'
import PositionScreen from './src/screens/PositionScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <DimensionsScreen /> */}
      <CounterScreen />
    </SafeAreaView>
  )
}

export default App