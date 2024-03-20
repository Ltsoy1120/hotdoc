import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import { classMerge } from "../../../../../helpers/common"
import { EmployeeDTO } from "../../../../../models/employees"
import Icon from "../../../UI/Icon"
import "./style.scss"

interface EmployeesTableProps {
  employees: EmployeeDTO[]
  handleDelete: (id: number) => void
}

const EmployeesTable = ({ employees, handleDelete }: EmployeesTableProps) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [currentEmployeeId, setCurrentEmployeeId] = useState<number | null>(
    null
  )
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    employeeId: number
  ) => {
    setAnchorEl(event.currentTarget)
    setCurrentEmployeeId(employeeId)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <TableContainer component={Paper} className="employees-table">
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Ф.И.О. сотрудника</TableCell>
            <TableCell align="left">ИИН</TableCell>
            <TableCell align="left">Права доступа</TableCell>
            <TableCell align="left">Статус</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee.id}>
              <TableCell component="th">
                <Box className="employee-info">
                  <p>{employee.fullName}</p>
                  <span>{employee.email}</span>
                </Box>
              </TableCell>
              <TableCell align="left">{employee.identificator}</TableCell>
              <TableCell align="left" className="employee-role">
                <Icon name="users" size={20} />
                <span>{employee.role}</span>
              </TableCell>
              <TableCell align="left">
                <span
                  className={classMerge(
                    "badge",
                    employee.status === "Активно" ? "blue" : "black"
                  )}
                >
                  {employee.status}
                </span>
              </TableCell>
              <TableCell align="left">
                <IconButton
                  aria-controls="more-menu"
                  aria-haspopup="true"
                  onClick={event => handleClick(event, employee.id)}
                >
                  <Icon name="more" size={20} />
                </IconButton>
                <Menu
                  id="more-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl && currentEmployeeId === employee.id)}
                  onClose={handleClose}
                  className="employees-menu"
                >
                  <MenuItem
                    onClick={() => navigate(`/employees/edit/${employee.id}`)}
                  >
                    Редактировать
                  </MenuItem>
                  <MenuItem onClick={() => handleDelete(employee.id)}>
                    Удалить
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable
