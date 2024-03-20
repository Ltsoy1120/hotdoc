import { useState, useEffect } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { Box, InputLabel, Typography } from "@mui/material"
import {
  emailValidation,
  identificatorValidation
} from "../../../../helpers/validation"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { setEmployees } from "../../../../store/slices/employeesSlice"
import { EmployeeDTO } from "../../../../models/employees"
import FormHeader from "../../../components/containers/headers/FormHeader"
import InputController from "../../../components/UI/Input/InputController"
import BinInfo from "../../../components/containers/IdentificatorInfo/BinInfo"
import SelectController from "../../../components/UI/SimpleSelect/SelectController"
import { employeeRoleData } from "../../../components/UI/SimpleSelect/selectOptions"
import "./style.scss"

const EditEmployeePage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const employeeId = useParams().id
  const employees = useAppSelector(state => state.employees.employees)
  const [employee, setEmployee] = useState<EmployeeDTO>()
  const [status] = useState("success")

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      identificator: employee?.identificator ?? "",
      email: employee?.email ?? "",
      role: employee?.role ?? ""
    }
  })
  const { control, reset } = methods

  useEffect(() => {
    const result = employees.find(
      employee => employee?.id === Number(employeeId)
    )
    if (result) {
      setEmployee(result)
      reset({
        identificator: result.identificator,
        email: result.email,
        role: result.role
      })
    }
  }, [employees, employeeId, reset])

  const onSubmit: SubmitHandler<EmployeeDTO> = async data => {
    console.log("data", data)
    const updatedEmployees: EmployeeDTO[] = employees.map(employee =>
      employee.id === Number(employeeId)
        ? {
            ...employee,
            identificator: data.identificator,
            email: data.email,
            role: data.role
          }
        : employee
    )
    dispatch(setEmployees(updatedEmployees))
    //   const result = await dispatch(login(data))
    //  if (result) {
    //    reset()
    navigate("/employees")
    //    }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} btnText="Сохранить" />
        <Box className="page-inner">
          <form className="edit-employee-page" noValidate>
            <Box className="input-box">
              <InputLabel>БИН/ИИН контрагента</InputLabel>
              <Box className="input-info-box">
                <InputController
                  name="identificator"
                  type="number"
                  control={control}
                  rules={identificatorValidation}
                  placeholder="Введите БИН/ИИН"
                  autoFocus
                  required
                />
                <BinInfo />
              </Box>
            </Box>
            <Box className="input-box">
              <InputLabel>Email контрагента</InputLabel>
              <Box className="input-info-box">
                <InputController
                  name="email"
                  status={status}
                  control={control}
                  rules={emailValidation}
                  placeholder="Введите e-mail"
                  required
                  startIconName="mail"
                />
                {status === "success" && (
                  <Typography className="success">
                    Контрагент зарегистрирован в сервисе
                  </Typography>
                )}
              </Box>
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

export default EditEmployeePage
