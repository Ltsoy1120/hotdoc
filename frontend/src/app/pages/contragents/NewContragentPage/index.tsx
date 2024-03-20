import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Box, InputLabel } from "@mui/material"
import {
  emailValidation,
  identificatorValidation,
  REQUIRED
} from "../../../../helpers/validation"
import InputController from "../../../components/UI/Input/InputController"
import FormHeader from "../../../components/containers/headers/FormHeader"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { useNavigate } from "react-router-dom"
import { setContragents } from "../../../../store/slices/contragentsSlice"
import { ContragentDTO } from "../../../../models/contragents"
import "./style.scss"

const NewContragentPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      identificator: "",
      alternativeName: "",
      email: ""
    }
  })
  const { control } = methods
  const contragents = useAppSelector(state => state.contragents.contragents)

  const onSubmit: SubmitHandler<ContragentDTO> = async data => {
    console.log("data", data)
    const newContragents: ContragentDTO[] = [
      ...contragents,
      { ...data, id: contragents.length + 1 }
    ]
    dispatch(setContragents(newContragents))
    //   const result = await dispatch(login(data))
    //  if (result) {
    //    reset()
    navigate("/contragents")
    //    }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} btnText="Добавить" />
        <Box className="page-inner">
          <form className="new-contragent-page" noValidate>
            <Box className="input-box">
              <InputLabel>БИН/ИИН контрагента</InputLabel>
              <InputController
                name="identificator"
                type="number"
                control={control}
                rules={identificatorValidation}
                placeholder="Введите БИН/ИИН"
                autoFocus
                required
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Альтернативное название компании</InputLabel>
              <InputController
                name="alternativeName"
                control={control}
                rules={REQUIRED}
                placeholder="Введите название компании"
                required
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Email контрагента</InputLabel>
              <InputController
                name="email"
                control={control}
                rules={emailValidation}
                placeholder="Введите e-mail"
                required
                startIconName="mail"
              />
            </Box>
          </form>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default NewContragentPage
