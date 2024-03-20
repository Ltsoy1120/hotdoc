import { Box } from "@mui/material"
import { validClass } from "../../../../helpers/common"
import { passwordValidate } from "../../../../helpers/validation"
import "./style.scss"

interface PasswordRulesProps {
  watchPassword: string
  watchRepeatPassword: string
}

const PasswordRules = ({
  watchPassword,
  watchRepeatPassword
}: PasswordRulesProps) => {
  const { validateLength, validateNum, validateChar, validateRepeat } =
    passwordValidate(watchPassword, watchRepeatPassword)

  return (
    <Box className="password-rules">
      <span>
        Новый пароль должен содержать:
        <ul>
          <li className={validClass(watchPassword, validateLength)}>
            Как минимум 8 символов
          </li>
          <li className={validClass(watchPassword, validateNum)}>
            Содержать минимум одну цифру
          </li>
          <li className={validClass(watchPassword, validateChar)}>
            Содержать минимум одну букву верхнего и нижнего регистра
          </li>
          <li className={validClass(watchRepeatPassword, validateRepeat)}>
            Новый и повторный пароль должен совпадать
          </li>
        </ul>
      </span>
    </Box>
  )
}

export default PasswordRules
