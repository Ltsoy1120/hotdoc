import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Icon from "../../../components/UI/Icon"
import "./RegCompletedPage.scss"

const RegCompletedPage = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    localStorage.removeItem("isRegistrationOrg")
    localStorage.removeItem("isRegistrationUser")
    navigate("/")
  }
  return (
    <div className="reg-completed">
      <Icon name="check-success" size={56} />
      <h3>Ваш аккаунт подтвержден</h3>
      <p>Вы можете начать пользоваться нашим сервисом как Физическое лицо</p>
      <Button fullWidth variant="outlined" onClick={onClickHandler}>
        Войти
      </Button>
    </div>
  )
}

export default RegCompletedPage
