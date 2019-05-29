
import React from 'react'
import renderer from 'react-test-renderer'
import { Character } from '../../src/components'
import { generateUrlImage } from '../../src/utils'
import { characterMock } from '../../__mocks__/characters'

it('Character snapshot', () => {
  const rendered = renderer.create(
    <Character
      character={characterMock}
      legend
      image={generateUrlImage(characterMock.thumbnail.path, characterMock.thumbnail.extension, 'standard_fantastic')}
      onPress={() => null}
    />
  ).toJSON()
  expect(rendered).toMatchSnapshot()
})
