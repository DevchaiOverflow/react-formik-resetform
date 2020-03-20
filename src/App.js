import React, { useState } from 'react'
// Import Materail ui
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
// Import Control
import FormAdd1 from './Components/FormAdd1'
import FormAdd2 from './Components/FormAdd2'
import FormAdd3 from './Components/FormAdd3'
import FormControl from './Components/FormControl'
import FormDatePicker from './Components/FormDatePicker'

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
      formAdd1: {
        FULLNAME: "สมชาย คงทรัพย์",
        EMAIL: "demo@mail.com",
        GENDER: { CODE: 1, NAME: "ผู้ชาย" },
      },
      formAdd2: {
        FULLNAME: "ลุงตู่ว เต้นเก่ง",
        TEL: "08xxxxxxxx",
        GENDER: { CODE: 1, NAME: "ผู้ชาย" },
      },
      formAdd3: {
        FULLNAME: "ลุงตู่ว เต้นเก่ง",
        AGE: 35,
        GENDER: { CODE: 1, NAME: "ผู้ชาย" },
      }
    },
    genderMock: [
      { CODE: 0, NAME: "ผู้หญิง" },
      { CODE: 1, NAME: "ผู้ชาย" },
    ]
  }

  const [state, setState] = useState(initialState)

  /**
   * ล้างค่าทั้งหมด
   * @param {*} formName 
   */
  const handleClearFiedData = (formName) => {
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
          <h1>Formmik reset & restor (dynamic)</h1>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormAdd1
            fiedData={state.fieldData.formAdd1}
            genderMockdata={state.genderMock}
            onClearFiedData={handleClearFiedData}
            onRestoreForm={handleRestoreForm}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormAdd2
            fiedData={state.fieldData.formAdd2}
            genderMockdata={state.genderMock}
            onClearFiedData={handleClearFiedData}
            onRestoreForm={handleRestoreForm}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormAdd3
            fiedData={state.fieldData.formAdd3}
            genderMockdata={state.genderMock}
            onClearFiedData={handleClearFiedData}
            onRestoreForm={handleRestoreForm}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl genderMockdata={state.genderMock}/>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormDatePicker />
        </Grid>

      </Grid>
    </div>
  )
}

export default App
