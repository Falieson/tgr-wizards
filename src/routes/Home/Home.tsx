import Gx from 'gx'
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
          {Hello('Click the "Register" button in the Header to run through a registration form wizard')}
          {/* {Hello('Click HERE to view the same form with prefilled content')} */}
        </List>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
