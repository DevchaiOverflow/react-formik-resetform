export const initailFormAdd1 = (fieldData) => {
  const defualt = ''
  return {
    fullname: (fieldData) ? fieldData.FULLNAME : defualt,
    email: (fieldData) ? fieldData.EMAIL : defualt,
    gender: (fieldData) ? fieldData.GENDER : defualt
  }
}

export const initailFormAdd2 = (fieldData) => {
  const defualt = ''
  return {
    fullname: (fieldData) ? fieldData.FULLNAME : defualt,
    tel: (fieldData) ? fieldData.TEL : defualt,
    gender: (fieldData) ? fieldData.GENDER : defualt
  }
}

export const initailFormAdd3 = (fieldData) => {
  const defualt = ''
  return {
    fullname: (fieldData) ? fieldData.FULLNAME : defualt,
    age: (fieldData) ? fieldData.AGE : defualt,
    gender: (fieldData) ? fieldData.GENDER : defualt
  }
}