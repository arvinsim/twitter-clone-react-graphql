import React from 'react'
import { shallow } from 'enzyme'

import Tweet from '../../app/components/Tweet'

describe('Tweet (Component)', () => {
  it('exists', () => {
    const wrapper = shallow(<Tweet />)
    expect(wrapper.text()).toBe('Tweet')
  })
})
