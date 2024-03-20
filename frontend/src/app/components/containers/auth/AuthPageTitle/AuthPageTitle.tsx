import { useNavigate } from "react-router-dom"
import Icon from "../../../UI/Icon"
import "./AuthPageTitle.scss"

interface IAuthPageTitleProps {
  title: string
}
const AuthPageTitle = ({ title }: IAuthPageTitleProps) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="auth-page__title">
      <Icon name="arrow-left" size={24} onClick={handleBack} />
      <h3>{title}</h3>
    </div>
  )
}

export default AuthPageTitle
