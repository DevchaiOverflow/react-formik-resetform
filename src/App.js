import React, { useState } from 'react'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
// Import Control
import FormAdd from './Components/FormAdd'
import FormCheckbox from './Components/FormCheckbox'
import FormDatePicker from './Components/FormDatePicker'
import FormAdminPoly from './Components/FormAdminPoly'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '20px',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      margin: '5px',
    },
  },
}))

const App = props => {

  const classes = useStyles()

  const initialState = {
    fieldData: {
      formAdd: {
        FULLNAME: "สมชาย คงทรัพย์",
        EMAIL: "demo@mail.com",
        GENDER: { CODE: 1, NAME: "ผู้ชาย" },
      },
      formAddminPoly: {
        PROVINCE: {id: "24", name: "ฉะเชิงเทรา"},
        DISTRICT: {id: "01", name: "เมืองฉะเชิงเทรา"},
        SUBDISTRICT: {id: "02", name: "ท่าไข่"}
      }
    }
  }

  const [state, setState] = useState(initialState)

  /**
   * ล้างค่าทั้งหมด
   * @param {*} formName 
   */
  const handleClearFieldData = (formName) => {
    if (formName && formName !== '') {
      setState(prevState => ({
        ...prevState,
        fieldData: {
          ...prevState.fieldData,
          [formName]: null
        }
      }))
    }
    else {
      alert('Require form name')
    }
  }

  /**
   * คืนค่าเดิมจาก initail
   * @param {*} formName 
   */
  const handleRestoreForm = (formName) => {
    if (formName && formName !== '') {
      setState(prevState => ({
        ...prevState,
        fieldData: {
          ...prevState.fieldData,
          [formName]: initialState.fieldData[formName]
        }
      }))
    }
    else {
      alert('Require form name')
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <h1>Formik From Controls (dynamic)</h1>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormAdd
            fieldData={state.fieldData.formAdd}
            onClearFieldData={handleClearFieldData}
            onRestoreForm={handleRestoreForm}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormCheckbox />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormDatePicker />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormAdminPoly 
            fieldData={state.fieldData.formAddminPoly}
            onClearFieldData={handleClearFieldData}
            onRestoreForm={handleRestoreForm}
          />
        </Grid>

      </Grid>
    </div>
  )
}

export default App
