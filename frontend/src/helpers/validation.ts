export const passwordValidate = (
  watchPassword: string,
  watchRepeatPassword: string
) => {
  const validateLength = () => {
    return watchPassword.length >= 8
  }
  const validateNum = () => {
    const regNum = /(?=.*[0-9])/g
    return regNum.test(watchPassword)
  }
  const validateChar = () => {
    const regChar = /(?=.*[a-z])(?=.*[A-Z])/g
    return regChar.test(watchPassword)
  }
  const validateRepeat = () => {
    return watchPassword === watchRepeatPassword
  }

  const validateAll = () => {
    return (
      validateLength() && validateNum() && validateChar() && validateRepeat()
    )
  }

  return {
    validateLength,
    validateNum,
    validateChar,
    validateRepeat,
    validateAll
  }
}

export const REQUIRED = {
  value: true,
  message: "Обязательно для заполнения"
}

export const emailValidation = {
  required: REQUIRED,
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Неправильный email"
  }
}

export const phoneValidation = {
  required: REQUIRED
}
export const iinValidation = (v: any) => {
  let controlNum = null

  if (v?.length === 12) {
    controlNum =
      (1 * Number(v[0]) +
        2 * Number(v[1]) +
        3 * Number(v[2]) +
        4 * Number(v[3]) +
        5 * Number(v[4]) +
        6 * Number(v[5]) +
        7 * Number(v[6]) +
        8 * Number(v[7]) +
        9 * Number(v[8]) +
        10 * Number(v[9]) +
        11 * Number(v[10])) %
      11

    if (controlNum === 10) {
      controlNum =
        (3 * Number(v[0]) +
          4 * Number(v[1]) +
          5 * Number(v[2]) +
          6 * Number(v[3]) +
          7 * Number(v[4]) +
          8 * Number(v[5]) +
          9 * Number(v[6]) +
          10 * Number(v[7]) +
          11 * Number(v[8]) +
          1 * Number(v[9]) +
          2 * Number(v[10])) %
        11
    }
  }

  return v && v[11] !== String(controlNum)
}
export const identificatorValidation = {
  required: REQUIRED,
  pattern: {
    value: /^[0-9]{12}$/,
    message: "ИИН должен содержать 12 цифр"
  },
  validate: (iin: any) => {
    let controlNum = null

    if (iin?.length === 12) {
      controlNum =
        (1 * Number(iin[0]) +
          2 * Number(iin[1]) +
          3 * Number(iin[2]) +
          4 * Number(iin[3]) +
          5 * Number(iin[4]) +
          6 * Number(iin[5]) +
          7 * Number(iin[6]) +
          8 * Number(iin[7]) +
          9 * Number(iin[8]) +
          10 * Number(iin[9]) +
          11 * Number(iin[10])) %
        11

      if (controlNum === 10) {
        controlNum =
          (3 * Number(iin[0]) +
            4 * Number(iin[1]) +
            5 * Number(iin[2]) +
            6 * Number(iin[3]) +
            7 * Number(iin[4]) +
            8 * Number(iin[5]) +
            9 * Number(iin[6]) +
            10 * Number(iin[7]) +
            11 * Number(iin[8]) +
            1 * Number(iin[9]) +
            2 * Number(iin[10])) %
          11
      }
    }
    return iin[11] === String(controlNum) || "Иин не корректный"
  }
}

export const passwordValidation = {
  required: REQUIRED
}

export const repeatPasswordValidation = {
  required: REQUIRED
}

export const confirmationValidation = {
  required: REQUIRED
}

export const ecpValidation = {
  required: REQUIRED
}
