import { Button } from "@mui/material"
import { useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux"
import { setPassword } from "../../../../../../store/slices/authSlice"
import InputController from "../../../../UI/Input/InputController"
import {
  repeatPasswordValidation,
  passwordValidation,
  passwordValidate
} from "../../../../../../helpers/validation"
import "./PasswordForm.scss"
import PasswordRules from "../../../PasswordRules"

export interface INewPasswordData {
  password: string
  repeatPassword: string
}

export default function PasswordForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { control, handleSubmit, watch, reset } = useForm<INewPasswordData>({
    mode: "onChange",
    defaultValues: {
      password: "",
      repeatPassword: ""
    }
  })

  const password = useAppSelector(state => state.auth.password)

  useEffect(() => {
    password && navigate("/ecp-confirmation")
  }, [password, navigate])

  const { validateAll } = passwordValidate(
    watch("password"),
    watch("repeatPassword")
  )

  const onSubmit: SubmitHandler<INewPasswordData> = data => {
    dispatch(setPassword(data.password))
    reset()
    if (localStorage.getItem("isRecoveryPassword")) {
      navigate("/success-password")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="new-password-form"
      noValidate
    >
      <InputController
        name="password"
        control={control}
        rules={passwordValidation}
        type="password"
        placeholder="Введите пароль"
        fullWidth
        autoFocus
      />
      <InputController
        name="repeatPassword"
        control={control}
        rules={repeatPasswordValidation}
        type="password"
        placeholder="Повторите пароль"
        fullWidth
      />
      {/* <div className="new-password-form__rules">
        <span>
          Новый пароль должен содержать:{" "}
          <ul>
            <li className={validClass(watch("password"), validateLength)}>
              Как минимум 8 символов
            </li>
            <li className={validClass("password", validateNum)}>
              Содержать минимум одну цифру
            </li>
            <li className={validClass("password", validateChar)}>
              Содержать минимум одну букву верхнего и нижнего регистра
            </li>
            <li className={validClass("repeatPassword", validateRepeat)}>
              Новый и повторный пароль должен совпадать
            </li>
          </ul>
        </span>
      </div> */}
      <PasswordRules
        watchPassword={watch("password")}
        watchRepeatPassword={watch("repeatPassword")}
      />
      <Button
        type="submit"
        disabled={!validateAll()}
        fullWidth
        variant="contained"
      >
        Продолжить
      </Button>
    </form>
  )
}
