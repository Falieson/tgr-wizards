/* BetterStepper
 * - [x] limited steps
 * - [x] current step
*/

import * as className from 'classnames'
import * as React from 'react'
import { Link, RouteProps, withRouter } from 'react-router-dom'
import { ReactChildren } from '../types/common'
import { WizardConsumer } from '../Wizard'
import * as S from './BetterStepper.scss'

interface IStepperItemProps {
  active: boolean,
  dex: number,
  to: string,
}
export function StepperItem({
  active,
  dex,
  to,
}: IStepperItemProps) {
  const classes = {}
  classes[S.item_container] = true
  classes[S.item_active] = active
  const containerClasses = className(classes)

  return <Link to={to}>
    <div className={containerClasses}>
      <div className={S.item_text}>
        Step {dex + 1}
      </div>
    </div>
  </Link>
}

interface IProps {
  children: ReactChildren[]
  limit?: number,
}

interface IState {
  currentPage: number,
  id: string,
  query_id: string,
}

class BetterStepper extends React.Component<IProps & RouteProps, IState> {
  static defaultProps = {
    limit: 7,
  }

  steps: JSX.Element[]

  constructor(props: IProps) {
    super(props)

    this.state = {
      currentPage: 0,
      id: 'someId',
      query_id: 'Wz',
    }

    this.steps = this.makeSteps(this.state)
  }

  shouldComponentUpdate(_: any, ns: IState) { // tslint:disable-line no-any
    const newState = JSON.stringify(Object.values(ns)) !== JSON.stringify(Object.values(this.state))

    return newState || false
  }

  componentWillUpdate(_: any, ns: IState) { // tslint:disable-line no-any
    const newState = JSON.stringify(Object.values(ns)) !== JSON.stringify(Object.values(this.state))

    if (newState) {
      this.steps = this.makeSteps(ns)
    }
  }

  getCurrentSteps() {
    const { limit, } = this.props
    const { currentPage } = this.state
    const stepsCount = this.steps.length

    if (stepsCount <= (limit || 5)) {
      return this.steps
    }

    const mod = parseInt(`${(limit || 5) / 2}`, 10)
    const max = currentPage + mod
    const min = currentPage - mod
    return this.steps.filter((_, x) => {
      const lessThan = x <= max
      const grtrThan = x >= min
      return lessThan && grtrThan
    })
  }

  makeSteps(state: IState): JSX.Element[] {
    const {
      children, location
    } = this.props
    const {
      currentPage, id, query_id,
    } = state

    if (!children.length) { // only 1 page
      return []
    }

    const PWD = location && location.pathname
    const path = (n: number) => `${PWD}?${query_id}=${id}&Pg=${n}`

    // tslint:disable-next-line no-any
    return children.map((_c: any, i: number) => <StepperItem
      dex={i}
      key={i}
      to={path(i)}
      active={currentPage === i}
    />) // tslint:disable-line no-any
  }

  render() {
    return <WizardConsumer>
      {({page: currentPage, query_id, id}) => {
        // causes a react warning but limitation of the new context api?
        this.setState({currentPage, query_id, id})

        return  (
          <div className={[S.container, S.fill_secondary].join(' ')}>
            {this.getCurrentSteps()}
          </div>
        )
      }}
    </WizardConsumer>
  }
}

export default withRouter(BetterStepper)
