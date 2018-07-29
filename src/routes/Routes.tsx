import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from './Error404'
import Home from './Home'
import Register from './Register'

class Routes extends React.Component<{}, {}> {
  render() {
    return <Switch>
      <Route exact path="/" component={Home} />>
      <Route exact path="/register" component={Register} />>
      <Route component={Error404} />
    </Switch>
  }
}
export default Routes
