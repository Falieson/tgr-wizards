import * as React from 'react'
import { Link } from 'react-router-dom'
import { ReactChildren } from '../types/common'
import * as S from './SimpleStepper.scss'

export default function Stepper({children}: {children: ReactChildren}) {
  return <div className={[S.container, S.fill_secondary].join(' ')}>
    {children}
  </div>
}

export const StepItem = (to: string, key: number) => <Link to={to} key={key}>
Step {key + 1}
</Link>
