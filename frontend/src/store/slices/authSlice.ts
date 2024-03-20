import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CivilType, IAccount, PartialRegistrationDTO } from "../../models/auth"

interface AuthState {
  loading: boolean
  error: string
  civilType: CivilType | null
  partialRegistrationData: PartialRegistrationDTO | null
  password: string | null
  accountData: IAccount | null
}
const initialState: AuthState = {
  loading: false,
  error: "",
  civilType: null,
  partialRegistrationData: null,
  password: null,
  accountData: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetching(state, action: PayloadAction) {
      state.loading = true
    },
    authFetchSuccess(state, action: PayloadAction) {
      state.loading = false
    },
    authFetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    logout: state => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("auth")
    },
    setCivilType: (state, action: PayloadAction<CivilType>) => {
      state.civilType = action.payload
    },
    setPartialRegistrationData: (
      state,
      action: PayloadAction<PartialRegistrationDTO>
    ) => {
      state.loading = false
      state.partialRegistrationData = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setAccountData: (state, action: PayloadAction<IAccount>) => {
      state.accountData = action.payload
    }
  }
})

export const {
  authFetching,
  authFetchSuccess,
  authFetchError,
  logout,
  setCivilType,
  setPartialRegistrationData,
  setPassword,
  setAccountData
} = authSlice.actions

export const authReducer = authSlice.reducer
