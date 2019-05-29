import Axios from 'axios'
import MD5 from 'js-md5'
import { ToastAndroid } from 'react-native'
import Config from '../config'
import { LogError } from '../utils'

const timestamp = Number(new Date())
const hash = MD5(timestamp + Config.API_KEY_PRIVATE + Config.API_KEY_PUBLIC)

/**
 * Create instance to HTTP requests
 */
const Api = Axios.create({
  baseURL: Config.API_URL,
  timeout: Config.API_TIMEOUT,
  params: {
    ts: timestamp,
    apikey: Config.API_KEY_PUBLIC,
    hash,
  },
})

/**
 * Intercept instance to manipulate erros
 */
Api.interceptors.response.use(response => response.data, error => {
  const { response, response: { status } = {} } = error

  if (status === 401) {
    ToastAndroid.show('Ops, ocorreu um erro de autenticação!', ToastAndroid.SHORT)
  } else if (status === 404) {
    ToastAndroid.show('Ops, o recurso requisitado não foi encontrado!', ToastAndroid.SHORT)
  } else if (status >= 500) {
    ToastAndroid.show('Ops, ocorreu um erro interno. Tente novamente!', ToastAndroid.SHORT)
  } else {
    ToastAndroid.show('Ops, ocorreu um erro inesperado. Tente novamente!', ToastAndroid.SHORT)
  }

  if (process.env.NODE_ENV === 'test') {
    return response || error
  }

  return Promise.reject(response || error)
})

/**
 * Method to get the characters
 * @param {String} options - Options for filters
 */
export const getCharacters = (options = '') => {
  return (
    Api.get(`/characters${options}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        LogError('Error getCharacters', error)
      })
  )
}

export default Api
