import { useTheme } from '@mui/material/styles'
import { forwardRef, useMemo } from 'react'
import RSSelect, { StylesConfig } from 'react-select'
import { SelectProps } from './SelectField.types'
import { SelectStyled } from './SelectField.styles'

export const pxToRem = (value: number) => `${value / 16}rem`

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { error, ...rest } = props
  const theme = useTheme()

  const styles = useMemo<StylesConfig>(
    () => SelectStyled({ theme, error }),
    [error]
  )

  return (
    <RSSelect
      {...rest}
      styles={styles}
      components={{
        IndicatorSeparator: () => null,
      }}
      loadingMessage={() => '...'}
      ref={ref}
      classNamePrefix="react__select"
    />
  )
})

Select.displayName = 'Select'

export default Select
