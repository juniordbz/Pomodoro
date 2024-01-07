import { ThemeProvider } from 'styled-components'
import { Router } from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global.ts'
import { CycleContextProvider } from './context/CycleContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
