// tslint:disable max-line-length
import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'
import WizardBuilder from '../../components/wizard'
import { BetterStepper } from '../../modules/wizard/simple'
import pages from '../ContentDemo'
// import * as S from './SimpleWizard.css'

const Wizard = WizardBuilder({
  Stepper: BetterStepper,
  id: 'betterSimple',
})

function SimpleWizard() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Gx col={12}>
        <Wizard>
          {...pages}
        </Wizard>
      </Gx>
    </div>
  )
}

export default SimpleWizard
