import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './pages/Home'
import Details from './pages/Details'

const RootStack = createStackNavigator({
  Home,
  Details,
},
{
  initialRouteName: 'Home',
})

const AppContainer = createAppContainer(RootStack)

export default AppContainer
