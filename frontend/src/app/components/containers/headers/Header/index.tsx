import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Typography,
  Avatar
} from "@mui/material"
import Input from "../../../UI/Input"
import { getHeaderTitle } from "../headerTitles"
import { useAppDispatch } from "../../../../../hooks/redux"
import { logout } from "../../../../../store/slices/authSlice"
import { getMe } from "../../../../../store/actions/authActions"
import Icon from "../../../UI/Icon"
import "./style.scss"

const Header = () => {
  // const classes = useStyles({ width: drawerWidth })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  useEffect(() => {
    const getMyInfo = async () => {
      const result = await dispatch(getMe())
      console.log("getMyInfo", result)
    }
    getMyInfo()
  }, [dispatch])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate("/sign-in")
  }

  return (
    <AppBar className="header">
      <Toolbar>
        <Box>
          <Typography variant="h6" noWrap>
            {getHeaderTitle(pathname)?.title}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            dangerouslySetInnerHTML={{
              __html: getHeaderTitle(pathname)?.subtitle || ""
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "16px"
          }}
        >
          <Input
            name="search"
            value=""
            placeholder="Search…"
            onChange={() => console.log("first")}
          />
          <Icon name="help" size={40} />
          <Avatar src="/broken-image.jpg" onClick={handleMenu}>
            ЕЦ
          </Avatar>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate("/profile")}>Профиль</MenuItem>
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
