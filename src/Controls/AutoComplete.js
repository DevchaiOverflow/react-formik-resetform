import React from 'react'
// Import Materail ui
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const AutoComplete = ({ form, field, label, customStyle, dataSource = [] }) => {
  return (
    <Autocomplete
      {...field}
      style={customStyle}
      id="combo-box-`${field.name}`"
      options={dataSource}
      getOptionLabel={option => option.NAME}
      noOptionsText={'ไม่พบข้อมูล'}
      onChange={(e, value) => {
        form.setFieldValue(field.name, value)
      }}
      renderInput={params => <TextField {...params} label={label} variant="outlined" placeholder="กรุณาระบุ..." />}
    />
  )
}

export default AutoComplete
