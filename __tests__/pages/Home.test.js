
import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../../src/pages/Home'

const navigation = { navigate: jest.fn() }

it('renders Home', () => {
  const rendered = renderer.create(
    <Home navigation={navigation} />
  ).toJSON()
  expect(rendered).toMatchSnapshot()
})
