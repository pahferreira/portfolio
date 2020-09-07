import React, { FC, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from 'utils/PrivateRoute'
import paths from './paths'
import TRoute from 'types/router'
import { trigger } from 'storage/ducks/layout'
import { useDispatch } from 'react-redux'
import { useLanguage } from 'hooks/useLanguage'

const RouterContainer: FC = () => {
  const dispatch = useDispatch()
  const { currentLanguage } = useLanguage()
  useEffect(() => {
    dispatch(trigger(currentLanguage))
  }, [dispatch, currentLanguage])

  return (
    <Switch>
      {paths.map((route: TRoute) => {
        if (route.private) {
          return (
            <PrivateRoute
              exact={route?.notExact ? false : true}
              component={route.component}
              path={process.env.PUBLIC_URL + route.path}
            />
          )
        }
        return (
          <Route
            exact={route?.notExact ? false : true}
            path={process.env.PUBLIC_URL + route.path}
            component={route.component}
            key={route.path}
          />
        )
      })}
    </Switch>
  )
}

export default RouterContainer
