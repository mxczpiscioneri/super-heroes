
import React from 'react'
import renderer from 'react-test-renderer'
import Details from '../../src/pages/Details'

const navigation = { navigate: jest.fn() }

it('renders Details', () => {
  const rendered = renderer.create(
    <Details navigation={navigation} />
  ).toJSON()
  expect(rendered).toMatchSnapshot()
})
