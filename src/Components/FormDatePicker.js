import React from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// Import Hooks
import useInitialFormik from '../Hooks/UseInitialFormik'
// Import Control
import TextField from '../Controls/TextField'
import DatePick from '../Controls/DatePick'
import TimePick from '../Controls/TimePick'

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

const FormDatePicker = ({ fieldData }) => {

  const classes = useStyles()
  const initialFormHook = useInitialFormik(fieldData)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Formik
          enableReinitialize
          initialValues={initialFormHook.initialFormDatePicker(fieldData)}
        >
          {
            (props) => {
              return (
                <Form>
                  <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

                    <Grid item xs={12}>
                      <h2>Form Date Picker</h2>
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

                    <Grid item xs={6}>
                      <Field
                        name="date"
                        label="Date"
                        component={DatePick}
                        style={{ width: '100%' }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Field
                        name="time"
                        label="Time"
                        component={TimePick}
                        format={{
                          timeIntervals: 10,
                          dateFormat: 'h:mm'
                        }}
                        style={{ width: '100%' }}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.buttonAction}>
                      <Button variant="contained" onClick={props.handleReset}>คืนค่าเดิม</Button>
                    </Grid>

                  </Grid>
                </Form>
              )
            }
          }
        </Formik>
      </Paper>
    </div>
  )
}

export default FormDatePicker
