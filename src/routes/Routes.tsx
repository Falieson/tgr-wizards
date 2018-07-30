import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from './Error404'
import Home from './Home'
import SimpleWizard from './SimpleWizard'
import SimpleWizBetterStepper from './SimpleWizBetterStepper'

class Routes extends React.Component<{}, {}> {
  render() {
    return <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/simple" component={SimpleWizard} />
      <Route exact path="/simple-better" component={SimpleWizBetterStepper} />
      <Route component={Error404} />
    </Switch>
  }
}
export default Routes
