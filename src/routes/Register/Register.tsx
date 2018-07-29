import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Wizard from '../../components/wizard'
// import * as S from './Register.css'

function HomeEntrancePage() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Gx col={12}>
        <Wizard>
          <div>First Page</div>
          <div>Second Page</div>
          {/* <MyProfileForm />
          <MyLinksForm />
          <MyBioForm /> */}
        </Wizard>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
