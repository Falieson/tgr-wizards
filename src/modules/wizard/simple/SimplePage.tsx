import * as React from 'react'
import { ReactChildren } from '../types/common'

import * as S from './SimplePage.scss'

export default function SimplePages({children}: {children: ReactChildren}) {
  return <div className={S.container}>
    {children}
  </div>
}
