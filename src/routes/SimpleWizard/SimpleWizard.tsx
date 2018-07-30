// tslint:disable max-line-length

import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'
import Lipsum from '../../components/lipsum'
import Wizard from '../../components/wizard'
import { times } from '../../helpers/global'

// import * as S from './SimpleWizard.css'

function SimpleWizard() {
  const pages = [
    (<div key={0}>
      <h1>Long Page</h1>
      <Lipsum />
    </div>),
    ...times(100, (i: number) => <div key={i + 1}>Page #{i + 2}</div>),
  ]

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Gx col={12}>
        <Wizard>
          {...pages}
          {/* <MyProfileForm />
          <MyLinksForm />
          <MyBioForm /> */}
        </Wizard>
      </Gx>
    </div>
  )
}

export default SimpleWizard
