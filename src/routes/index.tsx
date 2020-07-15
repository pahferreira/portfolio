import React, { FC } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from '../utils/PrivateRoute'
import paths from './paths'
import TRoute from '../types/router'

const RouterContainer: FC = () => {
  return (
    <Router>
      <Switch>
        {paths.map((route: TRoute) => {
          if (route.private) {
            return (
              <PrivateRoute
                exact
                component={route.component}
                path={process.env.PUBLIC_URL + route.path}
              />
            )
          }
          return (
            <Route
              exact
              path={process.env.PUBLIC_URL + route.path}
              component={route.component}
              key={route.path}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default RouterContainer
