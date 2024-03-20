import React from "react"
import { Outlet } from "react-router"
import AuthFooter from "./AuthFooter"
import AuthBackground from "../../components/containers/auth/AuthBackground"
import "./AuthLayout.scss"
import BaseHeader from "../../components/containers/headers/BaseHeader"

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="auth">
        <BaseHeader />
        <div className="auth-page">
          <Outlet />
        </div>
        <AuthFooter />
      </div>
      <AuthBackground />
    </div>
  )
}

export default AuthLayout
