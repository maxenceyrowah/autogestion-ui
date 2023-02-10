import { PaletteOptions } from '@mui/material/styles/createPalette'

type PaletteMode = 'default'
type ColorOptions = 'lighter' | 'light' | 'main' | 'dark' | 'darker'
type Color = Record<ColorOptions, string>
type PaletteColorOptions = 'primary'

const palette: Record<PaletteMode, PaletteOptions> = {
  default: {
    primary: {
      light: '#ff8049',
      main: '#e84e1c',
      dark: '#005E50',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F4FEF7',
      main: '#F2FEF6',
      dark: '#A9B1AC',
      contrastText: '#545454',
    },
  },
}

export default palette
