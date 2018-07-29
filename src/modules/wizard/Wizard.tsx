/* Wizard
 *
*/

import * as React from 'react'
import { ReactChildren } from '../../types/common'

import {
  Container,
  Footer,
  Page,
  Stepper,
} from './simple'

interface IProps {
  children: ReactChildren
}

interface IState {
}

export default class Wizard extends React.Component<IProps, IState> {
  // steps: ReactChildren

  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return <Container>
      <Stepper/>
      {/*  steps={this.steps} */}
      <Page>
        {this.props.children}
        {/* {this.renderPage()} */}
      </Page>
      <Footer />
    </Container>
  }
}
