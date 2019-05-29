
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Background } from '../../src/components'

it('Background snapshot', () => {
  const rendered = renderer.create(
    <Background>
      test
    </Background>
  ).toJSON()
  expect(rendered).toMatchSnapshot()

  const renderedEmpty = renderer.create(
    <Background />
  ).toJSON()
  expect(renderedEmpty).toMatchSnapshot()
})

it('Background renders correctly', () => {
  const text = 'test'
  const wrapper = shallow(
    <Background>
      {text}
    </Background>
  )

  expect(wrapper.length).toEqual(1)
  expect(wrapper.props().children).toEqual(text)
})
