import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Icon from "../../../components/UI/Icon"
import "./SuccessPasswordPage.scss"

const SuccessPasswordPage = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    localStorage.removeItem("isRecoveryPassword")
    navigate("/sign-in")
  }
  return (
    <div className="success-password">
      <Icon name="check-success" size={56} />
      <h3>Пароль успешно сохранен</h3>
      <p>
        Ваш новый пароль установлен. Зайдите в аккаунт используя новый пароль
      </p>
      <Button fullWidth variant="outlined" onClick={onClickHandler}>
        Войти
      </Button>
    </div>
  )
}

export default SuccessPasswordPage
