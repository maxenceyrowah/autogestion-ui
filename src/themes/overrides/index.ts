import { Components, Theme } from '@mui/material'

import cssBaselineOverrides from './cssBaseline'
import buttonOverrides from './button'
import inputBaseOverrides from './inputBase'
import inputLabelOverrides from './inputLabel'
import dataGridOverrides from './dataGrid'

type ComponentsOverridesOptions = () => Components<Theme>

const componentsOverrides: ComponentsOverridesOptions = () => {
  return {
    ...inputLabelOverrides,
    ...inputBaseOverrides,
    ...buttonOverrides,
    ...cssBaselineOverrides,
    ...dataGridOverrides,
  }
}

export default componentsOverrides()
