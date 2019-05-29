
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Links } from '../../src/components'
import { linksMock } from '../../__mocks__/characters'

describe('Links', () => {
  it('Links snapshot', () => {
    const rendered = renderer.create(
      <Links urls={linksMock} />
    ).toJSON()
    expect(rendered).toMatchSnapshot()
  })

  it('Links renders correctly', () => {
    const wrapper = shallow(<Links urls={linksMock} />)

    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('Styled(TouchableOpacity)').length).toEqual(3)
    expect(wrapper.find('Styled(Text)').length).toEqual(3)
    expect(wrapper.find('Styled(Text)').first().props().children).toEqual(linksMock[0].type)
  })
})
