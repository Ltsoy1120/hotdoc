import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../../../hooks/redux"
import {
  AuthType,
  CivilType,
  PartialRegistrationDTO
} from "../../../../../../models/auth"
import { partialRegistration } from "../../../../../../store/actions/authActions"
import { setCivilType } from "../../../../../../store/slices/authSlice"
import InputController from "../../../../UI/Input/InputController"
import InputMaskController from "../../../../UI/Input/InputMaskController"
import BinInfo from "../../../IdentificatorInfo/BinInfo"
import IinInfo from "../../../IdentificatorInfo/IinInfo"
import {
  emailValidation,
  identificatorValidation,
  phoneValidation
} from "../../../../../../helpers/validation"
import "./RegistrationForm.scss"

interface RegistrationFormProps {
  civilType: CivilType
}
const RegistrationForm = ({ civilType }: RegistrationFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid }
  } = useForm<PartialRegistrationDTO>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      lang: "ru",
      phoneNumber: "",
      identificator: ""
    }
  })
  // const identificator = watch("identificator")
  // console.log("identificator", identificator)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<PartialRegistrationDTO> = async data => {
    dispatch(setCivilType(civilType))
    const result = await dispatch(partialRegistration(data))
    reset(data)
    localStorage.setItem("auth", AuthType.REGISTRATION)
    if (result) {
      navigate("/code-confirmation")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="registration-form"
      noValidate
    >
      <InputController
        name="email"
        control={control}
        rules={emailValidation}
        placeholder="Введите E-mail"
        fullWidth
        autoFocus
      />
      <InputMaskController
        name="phoneNumber"
        control={control}
        rules={phoneValidation}
        placeholder="+7 Номер телефона"
        fullWidth
      />
      <InputController
        name="identificator"
        control={control}
        rules={identificatorValidation}
        placeholder={
          civilType === CivilType.PHYSICAL_PERSON
            ? "Введите ваш ИИН"
            : "Введите ваш БИН"
        }
        fullWidth
      />

      {civilType === CivilType.PHYSICAL_PERSON ? <IinInfo /> : <BinInfo />}

      <Button
        type="submit"
        disabled={!isDirty || !isValid}
        fullWidth
        variant="contained"
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}

export default RegistrationForm
