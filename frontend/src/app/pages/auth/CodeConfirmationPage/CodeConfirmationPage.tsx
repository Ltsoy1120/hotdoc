import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../../hooks/redux"
import CodeForm from "../../../components/containers/auth/forms/CodeForm"
import AuthPageTitle from "../../../components/containers/auth/AuthPageTitle"
import "./ConfirmationPage.scss"

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate()
  const email = useAppSelector(
    state => state.auth.partialRegistrationData?.email
  )

  useEffect(() => {
    if (!email) {
      navigate("/registration")
    }
  }, [email, navigate])

  return (
    <div className="confirmation">
      <AuthPageTitle title="Подтверждение" />
      <p>
        Мы отправили на вашу почту {email} код для подтверждения. Введите его
        ниже
      </p>
      {email && <CodeForm email={email} />}
    </div>
  )
}

export default ConfirmationPage
