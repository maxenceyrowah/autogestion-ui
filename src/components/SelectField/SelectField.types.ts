import { ReactNode } from 'react'
import { ActionMeta, Props as RSSelectProps, StylesConfig } from 'react-select'
import { Theme } from '@mui/material'

export type SelectStyledProps = ({
  theme,
  error,
}: {
  theme: Theme
  error?: boolean
}) => StylesConfig

export type SelectProps = RSSelectProps & {
  size?: 'medium' | 'small'
  name: string
  label?: ReactNode
  helperText?: any
  controlId?: string
  fullWidth?: boolean
  error?: boolean
  onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void
  required?: boolean
  placeholder: string
}

export type SelectFieldProps = {
  name: string
  label?: ReactNode
  required: boolean
  placeholder: string
}
