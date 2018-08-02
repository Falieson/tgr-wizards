/* WizardBuilder()
 * Helper that makes it easy to swap out wizard components
 *
*/

import * as React from 'react'
import { RouteProps, withRouter } from 'react-router-dom'
import * as URLSearchParams from 'url-search-params'
import { suuid } from './helpers/string'
import { Container as SimpleContainer, Page as SimplePage, SimpleStepper } from './simple'
import * as T from './theme.scss'

const sid = () => suuid(4)
export const {
  Provider: WizardProvider,
  Consumer: WizardConsumer,
} = React.createContext({
  id: sid(),
  page: 0,
  query_id: 'Wz'
})

interface IWizProps extends RouteProps {
  children: any,  // tslint:disable-line no-any
  theme?: any,    // tslint:disable-line no-any
}

interface IWizBuilderProps {
  id?: string,
  Container?: JSX.Element,
  Page?: JSX.Element,
  Stepper?: JSX.Element,
  theme?: any,    // tslint:disable-line no-any
}

interface IState {
  currentPage: JSX.Element,
  pageNumber: number,
}

export default function WizardBuilder({
  id = sid(),
  Container = SimpleContainer,
  Page = SimplePage,
  Stepper = SimpleStepper,
  theme = T,
}: IWizBuilderProps = {}) {
  const Result = class Wizard extends React.Component<IWizProps, IState> {
    id: string
    pages: JSX.Element[]
    query_id = 'Wz'

    constructor(props: IWizProps) {
      super(props)

      this.id = id
      this.pages = this.makePages()

      this.state = {
        currentPage: this.pages[0],
        pageNumber: 0,
      }
    }

    componentWillReceiveProps(np: IWizProps) {
      this.setPage(np)
    }

    componentWillMount() {
      this.setPage(this.props)
    }

    componentWillUnmount() {
      // TODO: this.onAbandon()
      // NOTE: https://reacttraining.com/react-router/web/example/preventing-transitions
    }

    setPage(props: IWizProps) {
      const search = props.location && props.location.search.substring(1)
      const params = new URLSearchParams(search)

      if (this.id === params.get(this.query_id)) {
        // this wizard is active
        //   useful for toggling a modal wizard via params
        //   useful for having multiple wizards in the same page
        const pg = parseInt(params.get('Pg'), 10)
        if (pg !== this.state.pageNumber) {
          this.setState({
            currentPage: this.pages[pg],
            pageNumber: pg,
          })
        }
      }
    }

    makePages(): JSX.Element[] {
      if (!this.props.children.length) { // only 1 page
        return [this.props.children]
      }

      return this.props.children
    }

    render() {
      return <Container theme={theme}>
        <WizardProvider
          value={{
            id: this.id,
            page: this.state.pageNumber,
            query_id: this.query_id,
          }}
        >
          <Stepper>
            {this.props.children}
          </Stepper>
          <Page>
            {this.state.currentPage}
          </Page>
        </WizardProvider>
      </Container>
    }
  }

  return withRouter(Result) // ISSUE: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17355
}
