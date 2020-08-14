import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
