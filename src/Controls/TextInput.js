import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = ({ form, field, label, customStyle }) => {
  return (
    <TextField 
      {...field}
      style={customStyle}
      id="outlined-basic-`${field.name}`"
      label={label}
      variant="outlined"
    />
  )
}

export default TextInput
