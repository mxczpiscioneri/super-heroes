import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })

const items = {}

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

jest.mock('AsyncStorage', () => ({
  setItem: jest.fn((item, value) => {
    return new Promise(resolve => {
      items[item] = value
      resolve(value)
    })
  }),
  multiSet: jest.fn((item, value) => {
    return new Promise(resolve => {
      items[item] = value
      resolve(value)
    })
  }),
  getItem: jest.fn(item => {
    return new Promise(resolve => {
      resolve(items[item])
    })
  }),
  multiGet: jest.fn(item => {
    return new Promise(resolve => {
      resolve(items[item])
    })
  }),
  removeItem: jest.fn(item => {
    return new Promise(resolve => {
      resolve(delete items[item])
    })
  }),
}))
