import { FormHelperText as MuiFormHelperText, InputBase } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import React from 'react'
import { TextFieldProps } from './TextField.types'

const TextField = React.forwardRef(
  (
    {
      label,
      controlId,
      helperText,
      inputLabelProps,
      error,
      required,
      fullWidth,
      disabled,
      ...rest
    }: TextFieldProps,
    ref
  ) => {
    return (
      <FormControl
        error={!!error}
        fullWidth={fullWidth}
        id={controlId}
        required={required}>
        {label && (
          <InputLabel {...inputLabelProps} shrink data-testid="input-label">
            {label}
          </InputLabel>
        )}
        <InputBase
          disabled={disabled}
          {...rest}
          fullWidth={fullWidth}
          inputRef={ref}
          ref={ref}
          data-testid="input-field"
        />
        <MuiFormHelperText error={!!error} data-testid="helper-text">
          {error ? helperText : ''}
        </MuiFormHelperText>
      </FormControl>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
