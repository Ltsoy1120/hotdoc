import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EmployeeDTO } from "../../models/employees"

const mockEmployees = [
  {
    id: 1,
    fullName: "Азимханов Рустем",
    email: "rustem@datcom.kz",
    identificator: "8912304901",
    role: "Сотрудник с правом подписи (зам.директора)",
    status: "Активно"
  },
  {
    id: 2,
    fullName: "Санжар Надралиев",
    email: "ceo@datcom.kz",
    identificator: "8912304901",
    role: "Первый руководитель",
    status: "Активно"
  },
  {
    id: 3,
    fullName: "Алима Нурхожаева",
    email: "hr@datcom.kz",
    identificator: "8912304901",
    role: "Сотрудник с правом подписи кадровых документов",
    status: "Активно"
  },
  {
    id: 4,
    fullName: "Сакен Болатович",
    email: "finance@datcom.kz",
    identificator: "8912304901",
    role: "Сотрудник с правом подписи финансовых документов",
    status: "Не активно"
  }
]

interface EmployeeState {
  employees: EmployeeDTO[]
}
const initialState: EmployeeState = {
  employees: mockEmployees
}

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<EmployeeDTO[]>) {
      state.employees = action.payload
    }
  }
})

export const { setEmployees } = employeesSlice.actions

export const employeesReducer = employeesSlice.reducer
