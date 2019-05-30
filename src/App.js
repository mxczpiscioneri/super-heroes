import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'
import Colors from './statics/colors'
import FavoriteContext from './components/Favorite/context'

const App = () => (
  <FavoriteContext.Provider>
    <StatusBar barStyle="light-content" backgroundColor={Colors.SECONDARY} />
    <Routes />
  </FavoriteContext.Provider>
)

export default App
