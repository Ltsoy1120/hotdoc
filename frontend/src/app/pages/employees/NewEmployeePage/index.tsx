import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Box, InputLabel } from "@mui/material"
import {
  emailValidation,
  identificatorValidation
} from "../../../../helpers/validation"
import InputController from "../../../components/UI/Input/InputController"
import SelectController from "../../../components/UI/SimpleSelect/SelectController"
import { employeeRoleData } from "../../../components/UI/SimpleSelect/selectOptions"
import { EmployeeDTO } from "../../../../models/employees"
import FormHeader from "../../../components/containers/headers/FormHeader"
import { setEmployees } from "../../../../store/slices/employeesSlice"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { useNavigate } from "react-router-dom"
import "./style.scss"

const NewEmployeePage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      identificator: "",
      email: "",
      role: ""
    }
  })
  const { control } = methods
  const employees = useAppSelector(state => state.employees.employees)

  const onSubmit: SubmitHandler<EmployeeDTO> = async data => {
    console.log("data", data)
    const newEmployees: EmployeeDTO[] = [
      ...employees,
      { ...data, id: employees.length + 1, status: "Не активно" }
    ]
    dispatch(setEmployees(newEmployees))
    //   const result = await dispatch(login(data))
    //  if (result) {
    //    reset()
    navigate("/employees")
    //    }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} />
        <Box className="page-inner">
          <form className="new-employee-page" noValidate>
            <Box className="input-box">
              <InputLabel>ИИН сотрудника</InputLabel>
              <InputController
                name="identificator"
                type="number"
                control={control}
                rules={identificatorValidation}
                placeholder="Введите данные"
                autoFocus
                required
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Email сотрудника</InputLabel>
              <InputController
                name="email"
                control={control}
                rules={emailValidation}
                placeholder="Введите email сотрудника"
                required
                startIconName="mail"
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Роль сотрудника</InputLabel>
              <Box className="roles-box">
                <SelectController
                  name="role"
                  options={employeeRoleData}
                  control={control}
                  placeholder="Выберите роль для сотрудника"
                />
                <Box className="employee-rights">
                  <p>Права сотрудника:</p>
                  <ul>
                    <li>Подписание электронных документов</li>
                    <li>Подписание финансовых документов</li>
                    <li>Подписание разрешения на выпуск ЭЦП для сотрудников</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default NewEmployeePage
