import React, { useState } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

/***
 * Guide line
 * dev O00085 Somchai
 * 
 *  <Field
      name="fullname"
      label="Fullname"
      component={TextField}
      style={{ width: '100%' }}
    />
 * 
 */

const TextFieldControl = (props) => {

  const {
    form,
    field,
    label,
    style,
    size="small"
  } = props

  const [state, setState] = useState({ error: false })

  return (
    <DefualtView
      field={field}
      label={label}
      style={style}
      size={size}
      isError={state.error}
    />
  )
}

/**
 * function default view
 * dev O00085 Somchai
 * @param {*} props 
 */
const DefualtView = (props) => {

  const {
    field,
    label,
    style,
    size,
    isError
  } = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TextField
        error={isError}
        {...field}
        style={style}
        label={label}
        size={size}
        variant="outlined"
        id="outlined-`${field}`"
        InputLabelProps={{ shrink: true }}
      />
    </div>
  )
}

export default TextFieldControl
