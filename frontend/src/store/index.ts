import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice"
import { profileReducer } from "./slices/profileSlice"
import generalErrorReducer from "./slices/generalErrorSlice"
import { employeesReducer } from "./slices/employeesSlice"
import { contragentsReducer } from "./slices/contragentsSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  employees: employeesReducer,
  contragents: contragentsReducer,
  generalError: generalErrorReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
