import React, { MouseEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material"
import Button from "../../../UI/Button"
import Icon from "../../../UI/Icon"
import "./style.scss"

interface SubHeaderProps {
  page?: string
}

const SubHeader = ({ page }: SubHeaderProps) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const classes = useStyles({ isActive: anchorEl })
  const [view, setView] = useState<string>("list")

  const handleToggle = (event: MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box className="sub-header">
      <Box className="actions-group">
        <ToggleButtonGroup value={view} exclusive onChange={handleToggle}>
          <ToggleButton value="list">
            <Icon name="list" size={20} />
          </ToggleButton>
          <ToggleButton value="module">
            <Icon name="grid" size={20} />
          </ToggleButton>
        </ToggleButtonGroup>
        <Box>
          <Button
            variant="outlined"
            startIconName="filter"
            endIconName={anchorEl ? "chevron-up" : "chevron-down"}
            onClick={handleClick}
          >
            Фильтр
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Профиль</MenuItem>
            <MenuItem onClick={handleClose}>Выйти</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Button variant="contained" onClick={() => navigate(`/${page}/new`)}>
        + Добавить {page === "contragents" ? "контрагентов" : "сотрудников"}
      </Button>
    </Box>
  )
}

export default SubHeader
