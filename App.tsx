import React from 'react'
import CounterScreen from './src/screens/CounterScreen'
import BoxObjectModel from './src/screens/BoxObjectModel'
import { SafeAreaView } from 'react-native'
import DimensionsScreen from './src/screens/DimensionsScreen'
import PositionScreen from './src/screens/PositionScreen'
import BuyListScreen from './src/screens/BuyListScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <DimensionsScreen /> */}
      <BuyListScreen />
    </SafeAreaView>
  )
}

export default App