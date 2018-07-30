// tslint:disable no-any
import * as React from 'react'
import { Link } from 'react-router-dom'
import { WizardConsumer } from '../Wizard'
import * as S from './SimpleStepper.scss'

export const StepItem = (to: string, key: number) => <Link to={to} key={key}>
Step {key + 1}
</Link>

export default function Stepper({children}: {children: JSX.Element[]}) {
  return <WizardConsumer>
    {({id, query_id, }) => {
      const PWD = location && location.pathname
      const path = (n: number) => `${PWD}?${query_id}=${id}&Pg=${n}`

      return <div className={[S.container, S.fill_secondary].join(' ')}>
        {children.map((_c: any, i: number) => StepItem(path(i), i))}
      </div>
    }}
  </WizardConsumer>
}
