import { Button } from "@mui/material"
import { signService, ws } from "../../../../../../services/sign.service"
import "./ECPForm.scss"

export interface IECPData {
  ecpAuth: File | string
  ecpPassword: string
}

const ECPForm = () => {
  const chooseCert = () => {
    if (ws) {
      signService.signXml()
    }
  }

  return (
    <div className="ecp-confirmation-form">
      <p className="ecp-confirmation__text">
        Загрузите ЭЦП чтобы подтвердить свой аккаунт.
      </p>
      <Button fullWidth variant="contained" onClick={chooseCert}>
        Выберите сертификат
      </Button>
    </div>
  )
}

export default ECPForm
