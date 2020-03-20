import React from 'react'
// Import Materail ui
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

/***
 * Guide line
 * dev O00085 Somchai
 * 
 *  <Field
      name="status"
      label="Status"
      component={CheckBox}
      style={{ width: '100%' }}
    />
 * 
 */

const CheckBox = (props) => {

  const {
    form,
    field,
    label
  } = props

  const handleChange = (e) => {
    form.setFieldValue(field.name, e.target.checked)
  }

  return (
    <DefaultView
      label={label}
      field={field}
      handleChange={handleChange}
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
    label,
    handleChange
  } = props

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={field.name}
          color="primary"
          checked={field.value}
          onChange={handleChange}
        />
      }
      label={label}
    />
  )
}

export default CheckBox
