import { Components, Theme } from '@mui/material'

type CssBaselineOverridesOptions = () => {
  MuiCssBaseline: Components<Theme>['MuiCssBaseline']
}

const cssBaseline: CssBaselineOverridesOptions = () => ({
  MuiCssBaseline: {},
})

export default cssBaseline()
