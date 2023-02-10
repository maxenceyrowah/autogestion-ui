import { Components, Theme } from '@mui/material'

type InputLabelOverridesOptions = () => {
  MuiInputLabel: Components<Theme>['MuiInputLabel']
}

const inputLabel: InputLabelOverridesOptions = () => ({
  MuiInputLabel: {
    styleOverrides: {
      root: {
        transform: 'translate(0px, -6px) scale(0.75)',
        zIndex: 0,
      },
    },
  },
})

export default inputLabel()
