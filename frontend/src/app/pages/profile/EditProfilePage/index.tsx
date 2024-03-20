import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Avatar, Box, Divider, InputLabel } from "@mui/material"
import {
  emailValidation,
  identificatorValidation
} from "../../../../helpers/validation"
import PasswordRules from "../../../components/containers/PasswordRules"
import InputController from "../../../components/UI/Input/InputController"
import FormHeader from "../../../components/containers/headers/FormHeader"
import "./style.scss"

export interface ProfileData {
  avatar: File | undefined
  identificator: string
  fullName: FullName
  email: string
  password: string
  repeatPassword: string
}

interface FullName {
  firstName: string
  secondName: string
  middleName: string
}

const EditProfilePage = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      avatar: undefined,
      identificator: "",
      fullName: { firstName: "", secondName: "", middleName: "" },
      email: "",
      password: "",
      repeatPassword: ""
    }
  })

  const { control, watch } = methods

  const onSubmit: SubmitHandler<ProfileData> = async data => {
    console.log("data", data)
    //   const result = await dispatch(login(data))
    //  if (result) {
    //    reset()
    //    navigate("/documents/all")
    //    }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} />
        <Box className="page-inner">
          <form className="edit-profile-page" noValidate>
            <Box className="input-box">
              <InputLabel>
                Ваше фото
                <br />
                <span>Это будет отображено на вашем профиле</span>
              </InputLabel>
              <Box alignItems="center" className="input-fields">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                <InputController
                  name="files"
                  type="file"
                  multiple
                  control={control}
                />
              </Box>
            </Box>
            <Divider />

            <Box className="input-box">
              <InputLabel>Ваш идентификатор</InputLabel>
              <InputController
                name="identificator"
                control={control}
                rules={identificatorValidation}
                placeholder="Введите данные"
                autoFocus
              />
            </Box>
            <Divider />

            <Box className="input-box">
              <InputLabel>Ф.И.О</InputLabel>
              <Box className="input-fields">
                <InputController
                  name="fullName.firstName"
                  control={control}
                  placeholder="Введите данные"
                />
                <InputController
                  name="fullName.secondName"
                  control={control}
                  placeholder="Введите данные"
                />
                <InputController
                  name="fullName.middleName"
                  control={control}
                  placeholder="Введите данные"
                />
              </Box>
            </Box>
            <Divider />

            <Box className="input-box">
              <InputLabel>Email</InputLabel>
              <InputController
                name="email"
                control={control}
                rules={emailValidation}
                placeholder="Укажите вид документа"
                autoFocus
                startIconName="mail"
              />
            </Box>
            <Divider />

            <Box className="input-box">
              <InputLabel>Изменить пароль</InputLabel>
              <Box flexDirection="column" className="input-fields">
                <InputController
                  name="password"
                  control={control}
                  type="password"
                  placeholder="Введите пароль"
                  fullWidth
                  autoFocus
                />
                <InputController
                  name="repeatPassword"
                  control={control}
                  type="password"
                  placeholder="Повторите пароль"
                  fullWidth
                />
                <PasswordRules
                  watchPassword={watch("password")}
                  watchRepeatPassword={watch("repeatPassword")}
                />
              </Box>
            </Box>
          </form>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default EditProfilePage
