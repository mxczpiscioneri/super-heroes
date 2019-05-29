import RNConfig from 'react-native-config'

const Config = {
  ENV: RNConfig.ENV,
  API_URL: RNConfig.API_URL,
  API_KEY_PUBLIC: RNConfig.API_KEY_PUBLIC,
  API_KEY_PRIVATE: RNConfig.API_KEY_PRIVATE,
  API_TIMEOUT: parseInt(RNConfig.API_TIMEOUT) || 60000,
}

export default Config
