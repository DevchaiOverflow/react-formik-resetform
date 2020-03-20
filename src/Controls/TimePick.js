import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// Import Controls
import TextField from '@material-ui/core/TextField'

/***
 * Guide line
 * dev O00085 Somchai
 * 
 *  <Field
      name="time"
      label="Time"
      component={TimePick}
      format={{
        timeIntervals: 10,
        dateFormat: 'h:mm'
      }}
      style={{ width: '100%' }}
    />
 * 
 */

const TimePick = (props) => {

  const {
    form,
    field,
    style,
    label,
    size = "small",
    format = { timeIntervals: 15, dateFormat: 'h:mm aa' }
  } = props

  const [state, setState] = useState({ error: false })

  const getDate = () => {
    let date = null
    if (field.value) {
      date = new Date(field.value)
    }
    return date
  }

  const handleChange = (date) => {
    const getTime = (date) ? new Date(date).getTime() : ''
    form.setFieldValue(field.name, getTime)
  }

  return (
    <DefaultView
      isError={state.error}
      startTime={getDate()}
      field={field}
      style={style}
      label={label}
      size={size}
      format={format}
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
    isError,
    startTime,
    field,
    style,
    label,
    size,
    format,
    handleChange
  } = props

  const CustomInput = ({ value, onClick }) => {
    return (
      <TextField
        error={isError}
        id="outlined-`${field.name}`"
        variant="outlined"
        label={label}
        value={value}
        size={size}
        onClick={onClick}
        InputLabelProps={{ shrink: true }}
      />
    )
  }

  return (
    <DatePicker
      style={style}
      isClearable
      selected={startTime}
      customInput={<CustomInput />}
      onChange={(date) => handleChange(date)}
      showTimeSelect
      showTimeSelectOnly
      timeCaption="Time"
      timeIntervals={format.timeIntervals}
      dateFormat={format.dateFormat}
    />
  )
}

export default TimePick
