import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Hello from '../../components/hello'
import * as S from './Register.css'

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Gx col={12}>
        {Hello('The Registration Page')}
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
