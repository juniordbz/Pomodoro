// Apenas código de definição de tipo.
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// passando tipagem para o tema Default que ja existe no styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
