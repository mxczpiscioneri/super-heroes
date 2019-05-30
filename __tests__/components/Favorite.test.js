import React from 'react'
import renderer from 'react-test-renderer'
import { AsyncStorage } from 'react-native'
import { shallow } from 'enzyme'
import { Favorite } from '../../src/components'
import { characterMock } from '../../__mocks__/characters'
import {
  IconFavorite,
  IconFavoriteBorder,
} from '../../src/statics/images'

describe('Favorite', () => {
  test('Favorite snapshot', () => {
    const rendered = renderer.create(
      <Favorite
        character={characterMock}
        favorites={[]}
        favoritesIds={[]}
        setFavorite={jest.fn()}
      />,
    ).toJSON()
    expect(rendered).toMatchSnapshot()
  })

  test('Favorite renders correctly', () => {
    const wrapper = shallow(
      <Favorite
        character={characterMock}
        favorites={[]}
        favoritesIds={[]}
        setFavorite={jest.fn()}
      />
    )

    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('Styled(TouchableOpacity)').length).toEqual(1)
    expect(wrapper.find('Styled(Image)').length).toEqual(1)
    expect(wrapper.find('Styled(Image)').props().source).toEqual(IconFavoriteBorder)
  })

  test('Favorite renders correctly active', async () => {
    await AsyncStorage.setItem('favorites', JSON.stringify([characterMock]))

    const wrapper = shallow(
      <Favorite
        character={characterMock}
        favoritesIds={[characterMock.id]}
        setFavorite={jest.fn()}
      />
    )

    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('Styled(TouchableOpacity)').length).toEqual(1)
    expect(wrapper.find('Styled(Image)').length).toEqual(1)
    expect(wrapper.find('Styled(Image)').props().source).toEqual(IconFavorite)
  })
})
