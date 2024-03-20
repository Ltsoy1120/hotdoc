import { AppDispatch } from ".."
import {
  PartialLoginDTO,
  FinishRegistrationDTO,
  PartialRegistrationDTO,
  LoginDTO
} from "../../models/auth"
import authService from "../../services/auth.service"
import {
  authFetching,
  authFetchSuccess,
  setAccountData,
  setPartialRegistrationData
} from "../slices/authSlice"

// Регистрация через почту и телефон
export const partialRegistration = (payload: PartialRegistrationDTO) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.partialRegistration(payload)
      console.log("partialRegistration", resp.data)
      if (resp.data) {
        dispatch(setPartialRegistrationData(payload))
        return resp.data
      }
    } catch (error) {}
  }
}

// Подтверждение кода
export const confirmCode = (payload: PartialLoginDTO) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.confirmCode(payload)
      console.log("confirmCode", resp.data)
      if (resp.data) {
        localStorage.setItem("access_token", resp.data.accessToken)
        return resp.data
      }
    } catch (error) {}
  }
}

// Загрузить ЭЦП
export const verifyXml = (payload: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.verifyXml(payload)
      console.log("verifyXml", resp.data)
      if (resp) {
        localStorage.setItem("accessToken", resp.data.accessToken)
        dispatch(authFetchSuccess())
      }
    } catch (error) {}
  }
}

// Завершение регистрации
export const completeRegistration = (payload: FinishRegistrationDTO) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.completeRegistration(payload)
      console.log(resp.data)
      // localStorage.setItem("access_token", resp.data.token || resp.data.accessToken);
      // dispatch(authFetchSuccess(resp.data))
    } catch (error) {}
  }
}

// Войти с помощью ЭЦП
export const ecpLogin = (payload: string, employer: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.ecpLogin(payload, employer)
      console.log("ecpLogin", resp.data)
      if (resp) {
        localStorage.setItem("accessToken", resp.data.accessToken)
        dispatch(authFetchSuccess())
        return resp
      }
    } catch (error) {}
  }
}

// Войти с помощью ИИН/БИН
export const login = (payload: LoginDTO) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.login(payload)
      console.log("login", resp.data)
      if (resp.data) {
        localStorage.setItem("accessToken", resp.data.accessToken)
        dispatch(authFetchSuccess())
        return resp.data
      }
    } catch (error) {}
  }
}

// Получить данные авторизованного пользователя
export const getMe = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching())
      const resp = await authService.getMe()
      console.log("getMe////", resp)
      if (resp.data) {
        dispatch(setAccountData(resp.data))
      }
    } catch (error) {}
  }
}
