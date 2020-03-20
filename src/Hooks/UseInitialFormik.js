const UseInitialFormik = props => {

  // create initailForm (fieldData)
  const example = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      gender: (fieldData) ? fieldData.GENDER : empty,
      status: (fieldData) ? fieldData.STATUS : true,
      status2: (fieldData) ? fieldData.STATUS2 : false,
    }
  }

  const initailFormAdd1 = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      email: (fieldData) ? fieldData.EMAIL : empty,
      gender: (fieldData) ? fieldData.GENDER : empty
    }
  }

  const initailFormAdd2 = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      tel: (fieldData) ? fieldData.TEL : empty,
      gender: (fieldData) ? fieldData.GENDER : empty
    }
  }

  const initailFormAdd3 = (fieldData) => {
    const empty = ''
    return {
      fullname: (fieldData) ? fieldData.FULLNAME : empty,
      age: (fieldData) ? fieldData.AGE : empty,
      gender: (fieldData) ? fieldData.GENDER : empty
    }
  }

  const initailFormDatePicker = (fieldData) => {
    const empty = ''
    return {
      date: (fieldData) ? fieldData.DATE : new Date(),
      time: (fieldData) ? fieldData.TIME : new Date(),
    }
  }

  return {
    example,
    initailFormAdd1,
    initailFormAdd2,
    initailFormAdd3,
    initailFormDatePicker
  }
}

export default UseInitialFormik
