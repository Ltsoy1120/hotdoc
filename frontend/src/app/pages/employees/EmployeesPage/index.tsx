import { useState, useEffect } from "react"
import { Box, Switch } from "@mui/material"
import Header from "../../../components/containers/headers/Header"
import SubHeader from "../../../components/containers/headers/SubHeader"
import EmptyCard from "../../../components/containers/EmptyCard"
import EmployeesTable from "../../../components/containers/tables/EmployeesTable"
import { EmployeeDTO } from "../../../../models/employees"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { setEmployees } from "../../../../store/slices/employeesSlice"
import "./style.scss"

const EmployeesPage = () => {
  const dispatch = useAppDispatch()
  const employees: EmployeeDTO[] = useAppSelector(
    state => state.employees.employees
  )
  const [isEmpty, setEmpty] = useState(false) // временно для демонстрации

  useEffect(() => {
    dispatch(setEmployees(employees))
  }, [dispatch, employees])

  // временно для демонстрации
  const handleChange = () => {
    setEmpty(!isEmpty)
  }

  const handleDelete = (id: number) => {
    const newEmployees: EmployeeDTO[] = employees.filter(
      (item: EmployeeDTO) => item.id !== id
    )
    dispatch(setEmployees(newEmployees))
  }

  return (
    <Box component="main" className="page-wrapper">
      <Header />
      <Box className="page-inner">
        <Box className="employeees-page">
          <SubHeader page="employees" />
          <Switch
            checked={!isEmpty}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {!isEmpty && employees.length ? (
            <EmployeesTable employees={employees} handleDelete={handleDelete} />
          ) : (
            <EmptyCard
              title="У вас еще нет сотрудников"
              text="Вы можете добавить своих сотрудников чтобы они могли
              работать от имени компании."
              btnText="Добавить сотрудников"
              btnPath="/employees/new"
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default EmployeesPage
