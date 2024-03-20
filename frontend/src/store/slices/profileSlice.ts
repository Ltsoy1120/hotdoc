import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfileData } from "../../app/pages/profile/EditProfilePage"

interface ProfileState {
  defaultValues: ProfileData | null
}
const initialState: ProfileState = {
  defaultValues: null
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setDefaultValues(state, action: PayloadAction<ProfileData>) {
      state.defaultValues = action.payload
    }
  }
})

export const { setDefaultValues } = profileSlice.actions

export const profileReducer = profileSlice.reducer
