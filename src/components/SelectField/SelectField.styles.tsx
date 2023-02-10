import { alpha } from '@mui/material/styles'
import { pxToRem } from './Select'
import { SelectStyledProps } from './SelectField.types'

export const SelectStyled: SelectStyledProps = ({ theme, error }) => ({
  menu: (provided: any) => ({
    ...provided,
    borderRadius: 0,
  }),
  control: (base: any, state: { isFocused: any }) => ({
    ...base,
    minHeight: '51.1333px',
    fontSize: '14px',
    borderRadius: pxToRem(8),
    boxShadow: state.isFocused
      ? `0 0 0 0.2rem ${alpha(theme.palette.primary.main, 0.25)}`
      : 'none',
    '&:hover': {
      border: '1px solid inherit',
    },
    ...(error && {
      border: `1px solid ${theme.palette.error.main} !important`,
      boxShadow: state.isFocused
        ? `0 0 0 0.2rem ${alpha(theme.palette.error.main, 0.25)}`
        : 'none',
    }),
    ...(!error && {
      border: state.isFocused
        ? `1px solid ${theme.palette.primary.main}`
        : '1px solid hsl(0, 0%, 80%)',
      boxShadow: state.isFocused
        ? `0 0 0 0.2rem ${alpha(theme.palette.primary.main, 0.25)}`
        : 'none',
    }),
  }),
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    background: state.isSelected ? theme.palette.primary.main : 'initial',
    borderRadius: '0',
    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.25),
    },
    fontSize: '0.89rem',
    zIndex: 9999,
    color: '#000',
  }),
  input: (provided: any) => ({
    ...provided,
    margin: 0,
  }),
  container: (provided: any) => ({
    ...provided,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
    paddingLeft: 12,
    fontWeight: 500,
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  }),
})
