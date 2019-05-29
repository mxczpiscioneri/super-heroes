
import React from 'react'
import renderer from 'react-test-renderer'
import Hone from '../../src/pages/Hone'

const navigation = { navigate: jest.fn() }

it('renders Hone', () => {
  const rendered = renderer.create(
    <Hone navigation={navigation} />
  ).toJSON()
  expect(rendered).toMatchSnapshot()
})
