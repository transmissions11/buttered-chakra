import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
