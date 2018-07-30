/* Wizard
 *
*/

import * as React from 'react'
import { RouteProps, withRouter } from 'react-router-dom'
import * as URLSearchParams from 'url-search-params'
import { suuid } from './helpers/string'
import { Container, Page, Stepper } from './simple'
import { StepItem } from './simple/SimpleStepper'

interface IProps {
  children: any, // tslint:disable-line no-any
  theme?: any,  // tslint:disable-line no-any
}

interface IState {
  currentPage: JSX.Element,
  pageNumber: number,
}

@withRouter // ISSUE: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17355
export default class Wizard extends React.Component<IProps & RouteProps, IState> {
  steps: JSX.Element[]
  pages: JSX.Element[]
  id = suuid(4)
  WIZARD_SHORT = 'Wz'

  constructor(props: IProps) {
    super(props)

    this.pages = this.makePages()
    this.steps = this.makeSteps()

    this.state = {
      currentPage: this.pages[0],
      pageNumber: 0,
    }
  }

  componentWillReceiveProps(np: IProps) {
    const search = np.location.search.substring(1)
    const params = new URLSearchParams(search)
    const id = params.get(this.WIZARD_SHORT)
    const pg = params.get('Pg')
    if (id === this.id) {
      // this wizard is active
      //   useful for toggling a modal wizard via params
      //   useful for having multiple wizards in the same page
      this.setPage(pg)
    }
  }

  componentWillUnmount() {
    // TODO: this.onAbandon()
    // NOTE: https://reacttraining.com/react-router/web/example/preventing-transitions
  }

  setPage(n: number) {
    if (n !== this.state.pageNumber) {
      this.setState({
        currentPage: this.pages[n]
      })
    }
  }

  makePages(): JSX.Element[] {
    if (!this.props.children.length) { // only 1 page
      return [this.props.children]
    }

    return this.props.children
  }

  makeSteps(): JSX.Element[] {
    if (!this.props.children.length) { // only 1 page
      return []
    }

    const PWD = this.props.location.pathname
    const path = n => `${PWD}?${this.WIZARD_SHORT}=${this.id}&Pg=${n}`
    return this.props.children.map((_c: any, i: number) => StepItem(path(i), i)) // tslint:disable-line no-any
  }

  render() {
    return <Container theme={this.props.theme}>
      <Stepper>
        {this.steps}
      </Stepper>
      <Page>
        {this.state.currentPage}
      </Page>
    </Container>
  }
}
