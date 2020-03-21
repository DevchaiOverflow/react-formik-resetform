import React, { useState } from 'react'
// Import Materail ui
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

/***
 * Guide line
 * dev O00085 Somchai
 * 
 *  <Field
      name="gender"
      label="Gender"
      component={Autocomplete}
      dataSource={genderMockdata}
      displayField="NAME"
      style={{ width: '100%' }}
    />
 * 
 */


const AutoComplete = (props) => {

  const {
    form,
    field,
    label,
    style,
    size = "small",
    dataSource = [],
    displayField,
    onChangeValue
  } = props

  const [state, setState] = useState({ error: false })

  const handleChange = (e, value) => {
    form.setFieldValue(field.name, value)
    if (onChangeValue) onChangeValue(value)
  }

  const createRenderInput = (params) => {
    return (
      <TextField
        error={state.error}
        {...params}
        label={label}
        size={size}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder="กรุณาระบุ..."
      />
    )
  }

  return (
    <DefaultView
      field={field}
      style={style}
      dataSource={dataSource}
      onChange={handleChange}
      displayField={displayField}
      onRenderInput={createRenderInput}
    />
  )
}

/**
 * function default view
 * dev O00085 Somchai
 * @param {*} props 
 */
const DefaultView = (props) => {

  const {
    field,
    style,
    dataSource,
    onChange,
    displayField,
    onRenderInput,
  } = props

  return (
    <Autocomplete
      {...field}
      style={style}
      id="combo-box-`${field.name}`"
      options={dataSource}
      getOptionLabel={(option) => option[displayField]}
      noOptionsText={'ไม่พบข้อมูล'}
      onChange={onChange}
      renderInput={onRenderInput}
    />
  )
}

export default AutoComplete
