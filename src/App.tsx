import React from 'react'
import './App.css'
import 'assets/styles.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './storage'
import { ThemeProvider } from 'styled-components'
import GlobalTheme from 'utils/GlobalTheme'
import theme from 'utils/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { LanguageProvider } from 'hooks/useLanguage'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <GlobalTheme />
          <Router>
            <Header />
            <Routes />
          </Router>
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
