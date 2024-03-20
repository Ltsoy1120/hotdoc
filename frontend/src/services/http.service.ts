import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios"
import { store } from ".."
import { BASE_URL } from "../api"
import { setErrorMessage } from "../store/slices/generalErrorSlice"

const http = axios.create({
  baseURL: BASE_URL
})

http.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken")

  config.headers = {
    ...config.headers
  } as AxiosHeaders

  //   config.headers.append("Accept-Language", "ru")

  if (accessToken) {
    config.headers.append("Authorization", `Bearer ${accessToken}`)
  }

  return config
})

http.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError<any>) => {
    // console.error("Error", error)

    switch (error.response?.status) {
      case 400:
        showErrorDialog(
          "",
          error.response?.data.ApiError.message ?? "Некорректные данные"
        )
        break
      case 401:
        // auto logout if 401 response returned from api
        //   this.authApiService.logout();
        localStorage.setItem("token", "")
        showErrorDialog("/sign-in", "Время сессии истекло")
        break
      case 403:
        // auto logout if 403 response returned from api
        //   this.authApiService.logout();
        showErrorDialog("/", "Доступ запрещен")
        break
      case 500:
        // auto logout if 403 response returned from api
        //   this.authApiService.logout();
        showErrorDialog("", "Сервер временно недоступен")
        break
    }
  }
)
const showErrorDialog = (path: string, message: string) => {
  store.dispatch(
    setErrorMessage({
      show: true,
      path,
      message
    })
  )
}
export default http
