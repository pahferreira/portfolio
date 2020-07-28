import React from 'react'
import './App.css'
import 'assets/styles.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './storage'
import { ThemeProvider } from 'styled-components'
import GlobalTheme from 'utils/GlobalTheme'
import theme from 'utils/theme'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
