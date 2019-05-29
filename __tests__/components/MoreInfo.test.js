
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { MoreInfo } from '../../src/components'
import { comicsMock } from '../../__mocks__/characters'

describe('MoreInfo', () => {
  it('MoreInfo snapshot', () => {
    const rendered = renderer.create(
      <MoreInfo title='Comics' data={comicsMock} />
    ).toJSON()
    expect(rendered).toMatchSnapshot()
  })

  it('MoreInfo renders correctly', () => {
    const title = 'Comics'
    const wrapper = shallow(<MoreInfo title={title} data={comicsMock} />)

    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('Styled(Text)').length).toEqual(1)
    expect(wrapper.find('Styled(Text)').props().children).toEqual(title)
    expect(wrapper.find('Carousel').length).toEqual(1)
  })
})
