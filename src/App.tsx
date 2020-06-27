import React from 'react'
import './App.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './storage'
import { ThemeProvider } from 'styled-components'
import GlobalTheme from 'utils/GlobalTheme'
import theme from 'utils/theme'
import Navbar from 'components/Navbar'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <Navbar />
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
