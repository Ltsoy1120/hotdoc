import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material"
import Icon from "../../../components/UI/Icon"
import { ISidebarMenuItem } from "./sidebarMenuList"
import "./style.scss"
import { classMerge } from "../../../../helpers/common"

interface ISidebarMenuItemProps {
  item: ISidebarMenuItem
  className?: string
}

const SidebarMenuItem = ({ item, className }: ISidebarMenuItemProps) => {
  const { title, link, icon, subMenu } = item
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(pathname.includes(link))
  }, [link, pathname])

  const clickHandler = () => {
    subMenu && setOpen(!open)
    navigate(link)
  }

  return (
    <Box
      className={classMerge("menuItem", className ?? "")}
      sx={{
        borderBottom: open ? "1px solid #EAECF0" : "none"
      }}
    >
      <ListItemButton
        className={isActive ? "active" : ""}
        onClick={() => clickHandler()}
      >
        <Icon name={icon} size="20" style={{ marginRight: 10 }} />
        <ListItemText primary={title} />
        {subMenu && (
          <Icon name={open ? "chevron-up" : "chevron-down"} size="18" />
        )}
      </ListItemButton>
      {subMenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subMenu.map(item => (
              <SidebarMenuItem
                key={item.id}
                item={item}
                className="submenuItem"
              />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  )
}

export default SidebarMenuItem
