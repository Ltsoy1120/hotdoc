import React from "react"
import { Button, Link } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import InputController from "../../../../UI/Input/InputController"
import {
  identificatorValidation,
  passwordValidation
} from "../../../../../../helpers/validation"
import { login } from "../../../../../../store/actions/authActions"
import { useAppDispatch } from "../../../../../../hooks/redux"
import { LoginDTO } from "../../../../../../models/auth"
import "./IdentificatorForm.scss"

const IdentificatorForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid }
  } = useForm<LoginDTO>({
    mode: "onChange",
    defaultValues: {
      identificator: "",
      password: ""
    }
  })

  const onClickHandler = () => {
    localStorage.setItem("isRecoveryPassword", "true")
  }

  const onSubmit: SubmitHandler<LoginDTO> = async data => {
    console.log("data", data)
    const result = await dispatch(login(data))
    console.log("result", result)
    if (result) {
      reset()
      navigate("/documents/all")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="identificator-form"
      noValidate
    >
      <InputController
        name="identificator"
        control={control}
        rules={identificatorValidation}
        placeholder="Введите БИН/ИИН"
        autoFocus
        fullWidth
      />
      <InputController
        name="password"
        type="password"
        control={control}
        rules={passwordValidation}
        placeholder="Введите пароль"
        fullWidth
      />
      <Link href="/recovery-password" variant="body2" onClick={onClickHandler}>
        Я забыл пароль
      </Link>
      <Button
        type="submit"
        disabled={!isDirty || !isValid}
        fullWidth
        variant="contained"
      >
        Войти
      </Button>
    </form>
  )
}

export default IdentificatorForm
