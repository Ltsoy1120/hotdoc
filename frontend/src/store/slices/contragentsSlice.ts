import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ContragentDTO } from "../../models/contragents"

const mockContragents = [
  {
    id: 1,
    name: "ТОО “Шанырак”",
    alternativeName: "Food & Drinks",
    email: "rustem@datcom.kz",
    identificator: "8912304901",
    documents: [
      {
        id: "1",
        name: "Акт сверки  №21412",
        createdAt: "21 января 2022",
        status: "Создано",
        contragent: "ТОО “Шанырак”",
        docType: "Счет на оплату"
      },
      {
        id: "2",
        name: "Договор недвижимости",
        createdAt: "21 января 2022",
        status: "На подписи",
        contragent: "ТОО “Шанырак”",
        docType: "Договор"
      },
      {
        id: "3",
        name: "Отпускной за июль месяц",
        createdAt: "21 января 2022",
        status: "На согласовании",
        contragent: "ТОО “Шанырак”",
        docType: "Справка"
      },
      {
        id: "4",
        name: "Уволнительный Азимханов Рустемович",
        createdAt: "21 января 2022",
        status: "Подписан",
        contragent: "ТОО “Шанырак”",
        docType: "Заявка"
      }
    ]
  },
  {
    id: 2,
    name: "ТОО “Sancho Corp”",
    alternativeName: "Food & Drinks",
    email: "ceo@datcom.kz",
    identificator: "8912304901",
    documents: []
  },
  {
    id: 3,
    name: "ИП “Орбита”",
    alternativeName: "Food & Drinks",
    email: "hr@datcom.kz",
    identificator: "8912304901",
    documents: []
  },
  {
    id: 4,
    name: "Азимханов Рустемович",
    alternativeName: "Food & Drinks",
    email: "finance@datcom.kz",
    identificator: "8912304901",
    documents: []
  }
]

interface EmployeeState {
  contragents: ContragentDTO[]
}
const initialState: EmployeeState = {
  contragents: mockContragents
}

const contragentsSlice = createSlice({
  name: "contragents",
  initialState,
  reducers: {
    setContragents(state, action: PayloadAction<ContragentDTO[]>) {
      state.contragents = action.payload
    }
  }
})

export const { setContragents } = contragentsSlice.actions

export const contragentsReducer = contragentsSlice.reducer
