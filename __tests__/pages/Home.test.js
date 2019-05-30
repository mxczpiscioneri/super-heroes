
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Home from '../../src/pages/Home'
import { charactesrMock } from '../../__mocks__/characters'

const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
}

describe('Home', () => {
  test('Home snapshot', () => {
    const rendered = renderer.create(
      <Home navigation={navigation} />
    ).toJSON()
    expect(rendered).toMatchSnapshot()
  })

  test('Home list empty', () => {
    const wrapper = shallow(<Home navigation={navigation} />)

    expect(wrapper.find('FlatList').length).toEqual(1)
    expect(wrapper.find('FlatList').props().data).toEqual([])
  })

  test('Home list', () => {
    const wrapper = shallow(<Home navigation={navigation} />)
    wrapper.setState({ characters: charactesrMock })

    expect(wrapper.find('FlatList').length).toEqual(1)
    expect(wrapper.find('FlatList').props().data).toEqual(charactesrMock)
  })
})
