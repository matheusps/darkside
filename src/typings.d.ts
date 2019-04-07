type Measure = 'sm' | 'md' | 'lg' | 'xl'
type Speed = 'fast' | 'slow' | 'normal'

type Color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

type Shade = 'default' | 'lighten' | 'darken' | 'constrast'
interface Shades {
  default: string
  lighten: string
  darken: string
  constrast: string
}
interface ColorSystem {
  readonly base: Shades
  readonly primary: Shades
  readonly secondary: Shades
  readonly success: Shades
  readonly info: Shades
  readonly warning: Shades
  readonly error: Shades
}
interface ThemeProps {
  readonly colors: ColorSystem
}

interface EnhancedWithTheme {
  readonly color?: Color
  readonly shade?: Shade
}
