import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Box, CssBaseline } from "@mui/material"
import Sidebar from "./Sidebar"
import { getMe } from "../../../store/actions/authActions"

const MainLayout: React.FC = () => {
  const navigate = useNavigate()

  const isAuth = !!localStorage.getItem("accessToken")

  useEffect(() => {
    if (!isAuth) {
      navigate("/sign-in")
    }
    getMe()
  }, [isAuth, navigate])

  return (
    <Box sx={{ display: "flex", height: "100svh" }}>
      <CssBaseline />
      <Sidebar />
      <Outlet />
    </Box>
  )
}

export default MainLayout
