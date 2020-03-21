import React from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// Import Controls
import TextField from '../Controls/TextField'
import Autocomplete from '../Controls/AutoComplete'
import CheckBox from '../Controls/CheckBox'
// Import Hooks
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

const FormControl = ({ fieldData }) => {

  const classes = useStyles()
  const initialFormHook = useInitialFormik()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Formik
          enableReinitialize
          initialValues={initialFormHook.initialFormCheckbox(fieldData)}
        >
          {
            (props) => {
              return (
                <Form>
                  <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

                    <Grid item xs={12}>
                      <h2>Form Checkbox</h2>
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="fullname"
                        label="Fullname"
                        component={TextField}
                        style={{ width: '100%' }}
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
                        name="status"
                        label="Status"
                        component={CheckBox}
                        style={{ width: '100%' }}
                      />
                      <Field
                        name="status2"
                        label="Status2"
                        component={CheckBox}
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

export default FormControl
