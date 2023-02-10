import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { forwardRef, Ref } from 'react'
import Select from './Select'
import { SelectProps } from './SelectField.types'

const SelectField = (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
  const {
    id,
    label,
    error,
    fullWidth,
    options,
    onChange,
    isLoading,
    isDisabled,
    value,
    required,
    ...selectProps
  } = props

  return (
    <FormControl
      id={id}
      variant="standard"
      error={error}
      fullWidth={fullWidth}
      required={required}>
      {label && (
        <InputLabel
          sx={{
            position: 'inherit',
          }}>
          {label}
        </InputLabel>
      )}

      <Select
        error={error}
        {...selectProps}
        value={value}
        onChange={onChange}
        options={options}
        isLoading={isLoading}
        isDisabled={isDisabled}
        ref={ref}
      />
    </FormControl>
  )
}

SelectField.displayName = 'SelectField'

export default forwardRef(SelectField)
