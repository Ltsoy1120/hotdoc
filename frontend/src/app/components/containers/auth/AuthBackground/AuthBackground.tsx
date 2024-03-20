import { Button } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import QRModal from "../../../modals/QRModal"
import Icon from "../../../UI/Icon"
import "./AuthBackground.scss"

const AuthBackground: React.FC = () => {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="auth-background">
        <div className="auth-background__content">
          <div className="content">
            <h1>{t("auth.background.title")}</h1>
            <p>{t("auth.background.subtitle")}</p>
            <div className="check-items">
              <div className="check-items__item">
                <Icon name="check" size="28" />
                <span>{t("auth.background.checkbox1")}</span>
              </div>
              <div className="check-items__item">
                <Icon name="check" size="28" />
                <span>{t("auth.background.checkbox2")}</span>
              </div>
              <div className="check-items__item">
                <Icon name="check" size="28" />
                <span>{t("auth.background.checkbox3")}</span>
              </div>
            </div>
          </div>
          <div className="mobile-content">
            <div className="mobile-content__info">
              <p>
                В мобильном приложении удобней. Ваши документы всегда под рукой!
              </p>
              <Button variant="text" onClick={handleClickOpen}>
                Сканировать QR код
              </Button>
            </div>
            <div className="mobile-content__btns">
              <Button>
                <img src="/static/images/google-pay.svg" alt="google-pay" />
              </Button>
              <Button>
                <img src="/static/images/app-store.svg" alt="app-store" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <QRModal open={open} close={handleClose} />
    </>
  )
}

export default AuthBackground
