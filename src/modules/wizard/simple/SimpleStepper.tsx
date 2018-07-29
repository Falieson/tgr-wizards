import * as React from 'react'
import { ReactChildren } from '../types/common'

import * as S from './SimpleStepper.scss'

export default function Stepper({children}: {children: ReactChildren}) {
  return <div className={[S.container, S.fill_secondary].join(' ')}>
    {children}
  </div>
}
