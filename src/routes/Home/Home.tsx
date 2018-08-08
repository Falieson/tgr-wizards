import Gx from '@tgrx/gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Hello from '../../components/hello'
import List from '../../components/list'
import * as S from './Home.css'

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <List ordered>
          {Hello('Start with the "SimpleWiz"')}
          {Hello('The stepper is a lot better in "Better SimpleWiz"')}
          {/* {Hello('Then checkout the fancier "FacebookFormWizard"')} */}
        </List>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
