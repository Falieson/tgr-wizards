import * as React from 'react'
import { Consumer as ThemeConsumer } from '../theme-context'
import { ReactChildren } from '../types/common'

import * as S from './SimplePage.scss'

export default function SimplePages({children}: {children: ReactChildren}) {
  return <ThemeConsumer>
     {({theme}) => {
       return  (
        <div className={[S.container, theme.bg_primary].join(' ')}>
          {children}
        </div>
       )
     }}
  </ThemeConsumer>
}
