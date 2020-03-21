import React, { useRef, useState } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
// Import Controls
import TextField from '../Controls/TextField'
import AutoComplete from '../Controls/AutoComplete'
// Import Constants
// import { initailFormAdd1 } from '../Constants/InitailFormik'
import useInitialFormik from '../Hooks/UseInitialFormik'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonAction: {
    alignItem: 'left',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}))

const FormAdd = ({ fieldData, onClearFieldData, onRestoreForm }) => {

  const classes = useStyles()
  const formMikRef = useRef()
  const initialFormHook = useInitialFormik()
  const [state, setState] = useState({
    genderMock: [
      { CODE: 0, NAME: "ผู้หญิง" },
      { CODE: 1, NAME: "ผู้ชาย" },
    ]
  })

  const handleClearForm = () => {
    // reset fieldData in state
    if (onClearFieldData) onClearFieldData('formAdd')
  }

  const handleRestoreForm = () => {
    if (onRestoreForm) onRestoreForm('formAdd')
    formMikRef.current.resetForm()
  }

  const bindFormikProps = (props) => {
    formMikRef.current = props
  }

  return (
    <div className={classes.root}>
      <Formik
        enableReinitialize
        initialValues={initialFormHook.initialFormAdd(fieldData)}
      >
        {
          (props) => {

            bindFormikProps(props)

            return (
              <Form>
                <Paper className={classes.paper}>
                  <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

                    <Grid item xs={12}>
                      <h2>Form Add</h2>
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="fullname"
                        label="ชื่อ-สกุล"
                        component={TextField}
                        style={{
                          width: '100%'
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="email"
                        label="อีเมล"
                        component={TextField}
                        style={{
                          width: '100%'
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="gender"
                        label="เพศ"
                        component={AutoComplete}
                        dataSource={state.genderMock}
                        displayField="NAME"
                        style={{
                          width: '100%'
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.buttonAction}>
                      <Button variant="contained" color="primary" onClick={handleClearForm}>ล้างค่า</Button>
                      <Button variant="contained" onClick={handleRestoreForm}>คืนค่าเดิม</Button>
                    </Grid>

                  </Grid>
                </Paper>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default FormAdd
