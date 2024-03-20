import { List } from "@mui/material"
import SidebarMenuItem from "./SidebarMenuItem"
import { sidebarMenuList } from "./sidebarMenuList"

const SidebarMenu = () => {
  return (
    <List>
      {sidebarMenuList.map(item => (
        <SidebarMenuItem key={item.id} item={item} />
      ))}
    </List>
  )
}

export default SidebarMenu
