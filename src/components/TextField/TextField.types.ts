import { InputBaseProps, InputLabelProps } from '@mui/material'
import { ReactNode } from 'react'

export interface TextFieldProps extends InputBaseProps {
  label?: ReactNode
  controlId?: string
  helperText?: any
  inputLabelProps?: InputLabelProps
  variant: string
}
