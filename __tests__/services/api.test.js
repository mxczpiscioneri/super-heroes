import MockAdapter from 'axios-mock-adapter'
import Api, { getCharacters } from '../../src/services/api'
import { charactersMock } from '../../__mocks__/characters'
import { unauthorizedMock } from '../../__mocks__/api'

const mockAdapter = new MockAdapter(Api)

describe('API', () => {
  test('Network Error', async () => {
    mockAdapter.onGet('/').networkError()

    const response = await Api.get('/')

    expect(response.message).toEqual('Network Error')
  })

  test('Timeout', async () => {
    mockAdapter.onGet('/').timeout()

    const response = await Api.get('/')

    expect(response.message).toEqual('timeout of 60000ms exceeded')
  })

  test('Unauthorized', async () => {
    mockAdapter.onGet('/').reply(401, unauthorizedMock)

    const response = await Api.get('/')

    expect(response.status).toEqual(401)
    expect(response.data.code).toEqual(unauthorizedMock.code)
    expect(response.data.message).toEqual(unauthorizedMock.message)
  })

  test('Not Found', async () => {
    mockAdapter.onGet('/test').reply(404, {})

    const response = await Api.get('/test')

    expect(response.status).toEqual(404)
  })

  test('Internal Server Error', async () => {
    mockAdapter.onGet('/').reply(500, {})

    const response = await Api.get('/')

    expect(response.status).toEqual(500)
  })

  test('Should return data from response getCustomer', async () => {
    mockAdapter.onGet('/characters').reply(200, { data: charactersMock })

    const response = await getCharacters()

    expect(response.length).toEqual(charactersMock.length)
    expect(response[0]).toEqual(charactersMock[0])
  })
})
