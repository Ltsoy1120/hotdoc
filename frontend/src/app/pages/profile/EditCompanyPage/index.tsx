import { Box, Divider, InputLabel } from "@mui/material"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {
  emailValidation,
  identificatorValidation,
  phoneValidation,
  REQUIRED
} from "../../../../helpers/validation"
import FormHeader from "../../../components/containers/headers/FormHeader"
import InputController from "../../../components/UI/Input/InputController"
import "./style.scss"

interface CompanyData {
  organizationName: string
  alternativeName: string
  identificator: string
  bankData: BankDTO
  directorData: DirectorDTO
}

interface BankDTO {
  IIK: string
  BIK: string
  bank: string
}

interface DirectorDTO {
  fullName: FullName
  email: string
  phoneNumber: string
}

interface FullName {
  firstName: string
  secondName: string
  middleName: string
}

const EditCompanyPage = () => {
  const navigate = useNavigate()
  // const methods = useFormContext<CompanyData>()
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      organizationName: "",
      alternativeName: "",
      identificator: "",
      bankData: {
        IIK: "",
        BIK: "",
        bank: ""
      },
      directorData: {
        fullName: { firstName: "", secondName: "", middleName: "" },
        email: "",
        phoneNumber: ""
      }
    }
  })

  const { control } = methods

  const onSubmit: SubmitHandler<CompanyData> = async data => {
    console.log(data)
    // const result = await dispatch(login(data))
    // if (result) {
    //   reset()
    navigate("/profile")
    // }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} />
        <Box className="page-inner">
          <form className="edit-company-page" noValidate>
            <Box className="input-box">
              <InputLabel>Наименование организации</InputLabel>
              <InputController
                name="organizationName"
                control={control}
                rules={REQUIRED}
                placeholder="Введите данные"
                autoFocus
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Альтернативное название</InputLabel>
              <InputController
                name="alternativeName"
                control={control}
                // rules={identificatorValidation}
                placeholder="Введите данные"
              />
            </Box>
            <Box className="input-box">
              <InputLabel>БИН/ИИН организации</InputLabel>
              <InputController
                name="identificator"
                control={control}
                rules={identificatorValidation}
                placeholder="Введите данные"
              />
            </Box>

            <Divider />

            <Box className="input-box">
              <InputLabel>ИИК</InputLabel>
              <InputController
                name="bankData.IIK"
                control={control}
                // rules={identificatorValidation}
                placeholder="Введите данные"
              />
            </Box>
            <Box className="input-box">
              <InputLabel>БИК</InputLabel>
              <InputController
                name="bankData.BIK"
                control={control}
                // rules={identificatorValidation}
                placeholder="Введите данные"
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Банк</InputLabel>
              <InputController
                name="bankData.bank"
                control={control}
                // rules={identificatorValidation}
                placeholder="Введите данные"
              />
            </Box>
            <Divider />

            <Box className="input-box">
              <InputLabel>Ф.И.О первого руководителя</InputLabel>
              <Box>
                <InputController
                  name="directorData.fullName.firstName"
                  control={control}
                  // rules={identificatorValidation}
                  placeholder="Введите данные"
                />
                <InputController
                  name="directorData.fullName.secondName"
                  control={control}
                  // rules={identificatorValidation}
                  placeholder="Введите данные"
                />
                <InputController
                  name="directorData.fullName.middleName"
                  control={control}
                  // rules={identificatorValidation}
                  placeholder="Введите данные"
                />
              </Box>
            </Box>
            <Box className="input-box">
              <InputLabel>Email первого руководителя</InputLabel>
              <InputController
                name="directorData.email"
                control={control}
                rules={emailValidation}
                placeholder="Введите данные"
                startIconName="mail"
              />
            </Box>
            <Box className="input-box">
              <InputLabel>Номер телефона первого руководителя</InputLabel>
              <InputController
                name="directorData.phoneNumber"
                control={control}
                rules={phoneValidation}
                placeholder="Введите данные"
              />
            </Box>
          </form>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default EditCompanyPage
