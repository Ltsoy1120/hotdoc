import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import "./style.scss"

interface TabsProps {
  tabsData: { id: number; label: string }[]
  value: number
  onChange?: (e: React.SyntheticEvent, newValue: number) => void
  children?: React.ReactNode
}

export default function SimpleTabs({
  tabsData,
  value,
  onChange,
  children
}: TabsProps) {
  return (
    <Box className="tabs">
      <Tabs value={value} onChange={onChange} aria-label="basic tabs example">
        {tabsData.map(item => (
          <Tab key={item.id} label={item.label} />
        ))}
      </Tabs>
      {children}
    </Box>
  )
}
