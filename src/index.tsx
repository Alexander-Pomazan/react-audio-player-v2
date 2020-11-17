import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { Reset } from 'styled-reset'

import { GlobalStyle } from './global-style'
import { TestStateJar } from './state-jar'

import { App } from 'src/app'

render(<TestStateJar />, document.getElementById('root'))
