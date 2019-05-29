import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'
import Colors from './statics/colors'

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={Colors.SECONDARY} />
    <Routes />
  </>
)

export default App
