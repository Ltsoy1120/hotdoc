import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GeneralErrorState {
  message: string
  path: string
  show: boolean
}
const initialState: GeneralErrorState = {
  message: "",
  path: "",
  show: false
}

export const generalErrorSlice = createSlice({
  name: "generalError",
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<GeneralErrorState>) {
      console.log(action.payload)
      state.message = action.payload.message
      state.path = action.payload.path
      state.show = action.payload.show
    }
  }
})

export const { setErrorMessage } = generalErrorSlice.actions

export default generalErrorSlice.reducer
