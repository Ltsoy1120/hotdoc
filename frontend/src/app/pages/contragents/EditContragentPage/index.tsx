import { useState, useEffect } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { Box, InputLabel, Typography } from "@mui/material"
import {
  emailValidation,
  identificatorValidation,
  REQUIRED
} from "../../../../helpers/validation"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { setContragents } from "../../../../store/slices/contragentsSlice"
import { ContragentDTO } from "../../../../models/contragents"
import FormHeader from "../../../components/containers/headers/FormHeader"
import InputController from "../../../components/UI/Input/InputController"
import BinInfo from "../../../components/containers/IdentificatorInfo/BinInfo"
import "./style.scss"

const EditContragentPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const contragentId = useParams().id
  const contragents = useAppSelector(state => state.contragents.contragents)
  const [contragent, setContragent] = useState<ContragentDTO>()
  const [status] = useState("success")

  console.log("contragent", contragent)

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      identificator: contragent?.identificator ?? "",
      alternativeName: contragent?.alternativeName ?? "",
      email: contragent?.email ?? ""
    }
  })
  const { control, reset } = methods

  useEffect(() => {
    const result = contragents.find(
      contragent => contragent?.id === Number(contragentId)
    )
    if (result) {
      setContragent(result)
      reset({
        identificator: result.identificator,
        alternativeName: result.alternativeName,
        email: result.email
      })
    }
  }, [contragents, contragentId, reset])

  const onSubmit: SubmitHandler<ContragentDTO> = async data => {
    console.log("data", data)
    const updatedContragents: ContragentDTO[] = contragents.map(contragent =>
      contragent.id === Number(contragentId)
        ? {
            ...contragent,
            alternativeName: data.alternativeName,
            email: data.email,
            identificator: data.identificator
          }
        : contragent
    )
    dispatch(setContragents(updatedContragents))
    //   const result = await dispatch(login(data))
    //  if (result) {
    //    reset()
    navigate("/contragents")
    //    }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} btnText="Сохранить" />
        <Box className="page-inner">
          <form className="edit-contragent-page" noValidate>
            <Box className="input-box">
              <InputLabel>БИН/ИИН контрагента</InputLabel>
              <Box className="input-info-box">
                <InputController
                  name="identificator"
                  type="number"
                  control={control}
                  rules={identificatorValidation}
                  placeholder="Введите БИН/ИИН"
                  autoFocus
                  required
                />
                <BinInfo />
              </Box>
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
              <Box className="input-info-box">
                <InputController
                  name="email"
                  status={status}
                  control={control}
                  rules={emailValidation}
                  placeholder="Введите e-mail"
                  required
                  startIconName="mail"
                />
                {status === "success" && (
                  <Typography className="success">
                    Контрагент зарегистрирован в сервисе
                  </Typography>
                )}
              </Box>
            </Box>
          </form>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default EditContragentPage
