import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button.tsx'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
