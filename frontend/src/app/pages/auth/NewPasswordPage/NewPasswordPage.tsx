import React from "react"
import PasswordForm from "../../../components/containers/auth/forms/PasswordForm"
import AuthPageTitle from "../../../components/containers/auth/AuthPageTitle"
import "./NewPasswordPage.scss"

const NewPasswordPage: React.FC = () => {
  return (
    <div className="new-password">
      <AuthPageTitle title="Новый пароль" />
      <p className="new-password__text">
        Добро пожаловать, Ануар! Придумайте пароль для своего аккаунта.
      </p>
      <PasswordForm />
    </div>
  )
}

export default NewPasswordPage
