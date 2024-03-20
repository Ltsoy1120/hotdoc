import { AxiosResponse } from "axios"
import { API_URL } from "../api"
import {
  PartialLoginDTO,
  AccountTokenDTO,
  FinishRegistrationDTO,
  PartialRegistrationResponse,
  PartialRegistrationDTO,
  LoginDTO,
  IAccount
} from "../models/auth"
import http from "./http.service"

const authService = {
  // Регистрация через почту, телефон и иин
  partialRegistration: async (
    payload: PartialRegistrationDTO
  ): Promise<AxiosResponse<PartialRegistrationResponse>> => {
    return await http.post(
      `${API_URL.accountApi}/accounts/partialRegistration`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      }
    )
  },
  // Регистрация через пароль

  // Обновить код активации
  updateCode: async (email: string): Promise<AxiosResponse<any>> => {
    return await http.post(`${API_URL.accountApi}/accounts/code/update`, email)
  },

  confirmCode: async (
    payload: PartialLoginDTO
  ): Promise<AxiosResponse<AccountTokenDTO>> => {
    return await http.post(
      `${API_URL.accountApi}/accounts/partialLogin`,
      payload
    )
  },

  // Проверка сертификата
  verifyXml: async (xml: string): Promise<AxiosResponse<any>> => {
    return await http.post(`${API_URL.edsApi}/dsg/verify`, xml, {
      headers: {
        "Content-Type": "application/xml"
      }
    })
  },

  // Завершение регистрации
  completeRegistration: async (
    payload: FinishRegistrationDTO
  ): Promise<AxiosResponse<any>> => {
    return await http.post(
      `${API_URL.accountApi}/accounts/completeRegistration`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      }
    )
  },

  // Войти с помощью ЭЦП
  ecpLogin: async (
    xml: string,
    employer: string
  ): Promise<AxiosResponse<AccountTokenDTO>> => {
    return await http.post(
      `${API_URL.accountApi}/accounts/login/ecp?employer=${employer}`,
      xml,
      {
        headers: {
          "Content-Type": "application/xml"
        }
      }
    )
  },

  // Войти с помощью ИИН/БИН
  login: async (payload: LoginDTO): Promise<AxiosResponse<AccountTokenDTO>> => {
    return await http.post(`${API_URL.accountApi}/accounts/login`, payload, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
  },

  getMe: async (): Promise<AxiosResponse<IAccount>> => {
    return await http.get(`${API_URL.accountApi}/accounts/me`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
  }
}
export default authService
