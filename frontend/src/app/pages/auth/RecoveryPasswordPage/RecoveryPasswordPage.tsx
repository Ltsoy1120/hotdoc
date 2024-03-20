import { Link } from "@mui/material"
import React, { useState, useEffect } from "react"
import { signService } from "../../../../services/sign.service"
import ECPForm from "../../../components/containers/auth/forms/ECPForm"
import NCALayerForm from "../../../components/containers/auth/forms/NCALayerForm"
import AuthPageTitle from "../../../components/containers/auth/AuthPageTitle"
import "./RecoveryPasswordPage.scss"

const RecoveryPasswordPage: React.FC = () => {
  const [isNCALayer, setIsNcaLayer] = useState(true)

  useEffect(() => {
    signService.initLayer(updateNcaLayer)
  }, [])

  const updateNcaLayer = (val: boolean) => {
    setIsNcaLayer(val)
  }

  const onClickHandler = () => {
    localStorage.removeItem("isRecoveryPassword")
  }
  return (
    <div className="recovery-password">
      <AuthPageTitle title="Восстановить пароль" />
      {isNCALayer ? (
        <ECPForm />
      ) : (
        <NCALayerForm updateNcaLayer={updateNcaLayer} />
      )}
      <Link href="/sign-in" variant="body2" onClick={onClickHandler}>
        Я вспомнил пароль
      </Link>
    </div>
  )
}

export default RecoveryPasswordPage
