import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

jest.useFakeTimers()

jest.mock('react-navigation', () => ({
  createAppContainer: jest.fn(),
  createDrawerNavigator: jest.fn(),
  createMaterialTopTabNavigator: jest.fn(),
  createStackNavigator: jest.fn(),
  StackActions: {
    push: jest.fn(),
    replace: jest.fn(),
  },
  NavigationActions: {
    navigate: jest.fn(),
  },
}))

jest.mock('react-native-gesture-handler', () => { })

jest.mock('js-md5', () => {
  return jest.fn().mockImplementation(() => {
    return { md5: () => { } }
  })
})

jest.mock('ToastAndroid', () => ({
  show: jest.fn(),
}))
