import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from './pages/Home'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Home />
    </ThemeProvider>
  </StrictMode>,
)
