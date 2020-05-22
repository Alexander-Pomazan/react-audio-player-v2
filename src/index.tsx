import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { Reset } from 'styled-reset'

import { GlobalStyle } from './global-style'

import { App } from 'src/app'

render(
  <StrictMode>
    <Reset />
    <GlobalStyle />

    <App />
  </StrictMode>,
  document.getElementById('root'),
)
