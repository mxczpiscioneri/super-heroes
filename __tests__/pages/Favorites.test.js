import React from 'react'
import renderer from 'react-test-renderer'
import Favorites from '../../src/pages/Home'
import FavoriteContext from '../../src/components/Favorite/context'

const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
}

describe('Favorites', () => {
  test('Favorites snapshot', () => {
    const rendered = renderer.create(
      <FavoriteContext.Provider>
        <Favorites navigation={navigation} />
      </FavoriteContext.Provider>,
    ).toJSON()
    expect(rendered).toMatchSnapshot()
  })
})
