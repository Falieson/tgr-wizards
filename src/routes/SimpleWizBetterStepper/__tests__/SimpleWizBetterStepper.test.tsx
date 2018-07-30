/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme'
import * as React from 'react'
import SimpleWizBetterStepper from '../SimpleWizBetterStepper'

describe('<SimpleWizBetterStepper />', () => {
  test('renders', () => {
    const wrapper = shallow(<SimpleWizBetterStepper />)
    expect(wrapper).toMatchSnapshot()
  })
})
