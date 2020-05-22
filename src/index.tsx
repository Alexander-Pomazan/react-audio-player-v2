import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import 'reset-css'

import { App } from 'src/app'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
