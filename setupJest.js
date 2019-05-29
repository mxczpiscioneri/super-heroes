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
  