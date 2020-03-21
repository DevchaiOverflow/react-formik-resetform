import React, { useState, useEffect, useRef } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// Import Controls
import Autocomplete from '../Controls/AutoComplete'
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

const FormAdminPoly = ({ fieldData, onClearFieldData, onRestoreForm }) => {

  const classes = useStyles()
  const formikRef = useRef()
  const initialFormHook = useInitialFormik()
  const [state, setState] = useState({
    province: [],
    district: [],
    subDistrict: [],
    currentCode: {
      provCode: null,
      ampCode: null,
    }
  })

  const handleClearForm = () => {
    // reset fieldData in state
    if (onClearFieldData) onClearFieldData('formAddminPoly')
  }

  useEffect(() => {

    getProvince()

  }, [])

  const bindFormikProps = (props) => {
    formikRef.current = props
  }

  const getProvince = async () => {
    const response = await fetch('https://gdev.geotalent.co.th/AMZ-API-2019/api/lookup/adminpoly')
    const result = await response.json()
    setState(prevState => ({
      ...prevState,
      province: [...result]
    }))
  }

  const getDistrict = async (provCode) => {
    const response = await fetch(`https://gdev.geotalent.co.th/AMZ-API-2019/api/lookup/adminpoly?provCode=${provCode}`)
    const result = await response.json()
    setState(prevState => ({
      ...prevState,
      district: [...result]
    }))
  }

  const getSubDistrict = async (provCode, ampCode) => {
    const response = await fetch(`https://gdev.geotalent.co.th/AMZ-API-2019/api/lookup/adminpoly?provCode=${provCode}&ampCode=${ampCode}`)
    const result = await response.json()
    setState(prevState => ({
      ...prevState,
      subDistrict: [...result]
    }))
  }

  const handleChangeProvice = (form) => value => {
    form.setFieldValue("district", null)
    form.setFieldValue("subDistrict", null)

    setState(prevState => ({
      ...prevState,
      district: [],
      subDistrict: [],
    }))

    if (value) {
      form.setFieldValue("province", value)
      getDistrict(value.id)
      setState(prevState => ({
        ...prevState,
        currentCode: {
          ...prevState.currentCode,
          provCode: value.id,
        }
      }))
    }
    else {
      setState(prevState => ({
        ...prevState,
        currentCode: {
          ...prevState.currentCode,
          provCode: null,
          ampCode: null
        }
      }))
    }
  }

  const handleChangeDistrict = (form) => value => {
    form.setFieldValue("subDistrict", null)

    setState(prevState => ({
      ...prevState,
      subDistrict: []
    }))

    if (value) {
      form.setFieldValue("district", value)
      getSubDistrict(state.currentCode.provCode, value.id)
      setState(prevState => ({
        ...prevState,
        currentCode: {
          ...prevState.currentCode,
          ampCode: value.id
        }
      }))
    }
  }

  const handleResetForm = () => {
    if (onRestoreForm) onRestoreForm('formAddminPoly')
    formikRef.current.handleReset()
    setState(prevState => ({
      ...prevState,
      district: [],
      subDistrict: [],
    }))
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Formik
          enableReinitialize
          initialValues={initialFormHook.initialFormAdminPoly(fieldData)}
        >
          {
            (props) => {
              
              if (bindFormikProps) bindFormikProps(props)

              return (
                <Form>
                  <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

                    <Grid item xs={12}>
                      <h2>Form Admin Poly</h2>
                    </Grid>

                    <Grid item xs={6}>
                      <Field
                        name="province"
                        label="จังหวัด"
                        component={Autocomplete}
                        dataSource={state.province}
                        displayField="name"
                        style={{ width: '100%' }}
                        onChangeValue={handleChangeProvice(props)}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Field
                        name="district"
                        label="อำเภอ"
                        component={Autocomplete}
                        dataSource={state.district}
                        displayField="name"
                        style={{ width: '100%' }}
                        onChangeValue={handleChangeDistrict(props)}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Field
                        name="subDistrict"
                        label="ตำบล"
                        component={Autocomplete}
                        dataSource={state.subDistrict}
                        displayField="name"
                        style={{ width: '100%' }}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.buttonAction}>
                      <Button variant="contained" color="primary" onClick={handleClearForm}>ล้างค่า</Button>
                      <Button variant="contained" onClick={handleResetForm}>คืนค่าเดิม</Button>
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

export default FormAdminPoly
