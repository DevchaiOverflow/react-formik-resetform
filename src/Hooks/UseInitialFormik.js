const UseInitialFormik = props => {

  // create initailForm (fieldData)

  const initialFormAdd = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      email: (fieldData) ? fieldData.EMAIL : empty,
      gender: (fieldData) ? fieldData.GENDER : empty
    }
  }

  const initialFormCheckbox = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      email: (fieldData) ? fieldData.EMAIL : empty,
      status: (fieldData) ? fieldData.STATUS : true,
      status2: (fieldData) ? fieldData.STATUS2 : false,
    }
  }

  const initialFormDatePicker = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      email: (fieldData) ? fieldData.EMAIL : empty,
      date: (fieldData) ? fieldData.DATE : new Date(),
      time: (fieldData) ? fieldData.TIME : new Date(),
    }
  }

  const initialFormAdminPoly = (fieldData) => {
    const empty = ''
    return {
      province: (fieldData) ? fieldData.PROVINCE : empty,
      district: (fieldData) ? fieldData.DISTRICT : empty,
      subDistrict: (fieldData) ? fieldData.SUBDISTRICT : empty,
    }
  }

  return {
    initialFormAdd,
    initialFormCheckbox,
    initialFormDatePicker,
    initialFormAdminPoly
  }
}

export default UseInitialFormik
