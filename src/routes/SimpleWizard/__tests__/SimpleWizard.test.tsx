/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme'
import * as React from 'react'
import SimpleWizard from '../SimpleWizard'

describe('<SimpleWizard />', () => {
  test('renders', () => {
    const wrapper = shallow(<SimpleWizard />)
    expect(wrapper).toMatchSnapshot()
  })
})
