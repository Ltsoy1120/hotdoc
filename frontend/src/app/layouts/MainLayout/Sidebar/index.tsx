import { NavLink } from "react-router-dom"
import { Toolbar, Box, Drawer, Divider } from "@mui/material"
import BaseHeader from "../../../components/containers/headers/BaseHeader/BaseHeader"
import Button from "../../../components/UI/Button"
import SidebarMenu from "./SidebarMenu"
import "./style.scss"

const Sidebar = () => {
  return (
    <Drawer className="sidebar" variant="permanent" anchor="left">
      <Toolbar>
        <BaseHeader />
      </Toolbar>
      <Box sx={{ p: 2 }}>
        <NavLink to={"/documents/new"}>
          <Button variant="contained" fullWidth startIconName={"document"}>
            Создать документ
          </Button>
        </NavLink>
        <SidebarMenu />
      </Box>
      <Divider />
    </Drawer>
  )
}

export default Sidebar
