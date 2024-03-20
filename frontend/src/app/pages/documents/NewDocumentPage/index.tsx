import { useState } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Box, Divider, InputLabel } from "@mui/material"
import { DocumentDTO } from "../../../../models/documents"
import ButtonMui from "../../../components/UI/Button"
import InputController from "../../../components/UI/Input/InputController"
import FormHeader from "../../../components/containers/headers/FormHeader"
import "./style.scss"

const NewDocumentPage = () => {
  const [step, setStep] = useState<number>(1)
  const methods = useForm<DocumentDTO>({
    mode: "onChange",
    defaultValues: {
      name: "",
      docFiles: [],
      docType: "",
      docKind: "",
      coordination: "",
      docRoute: [],
      needAuth: false
    }
  })
  const { control, handleSubmit } = methods

  const onContinueHandler = () => {
    setStep(step => step + 1)
  }
  console.log("step", step)

  const onSubmit: SubmitHandler<DocumentDTO> = async data => {
    console.log(data)
    // const result = await dispatch(login(data))
    // if (result) {
    //   reset()
    //   navigate("/documents/all")
    // }
  }

  return (
    <Box component="main" className="page-wrapper">
      <FormProvider {...methods}>
        <FormHeader onSubmit={onSubmit} />
        <Box className="page-inner">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="new-document-page"
            noValidate
          >
            <Box className="step">
              <Box className="input-box">
                <InputLabel>Название документа</InputLabel>
                <InputController
                  name="name"
                  control={control}
                  // rules={identificatorValidation}
                  placeholder="Название документа"
                  autoFocus
                />
              </Box>
              <Divider />
            </Box>

            {step >= 2 && (
              <Box className="step">
                <Box className="input-box">
                  <InputLabel>Загрузите документы</InputLabel>
                  <InputController
                    name="files"
                    type="file"
                    multiple
                    control={control}
                    // rules={passwordValidation}
                  />
                </Box>
                <Divider />
              </Box>
            )}

            {step >= 3 && (
              <Box className="step">
                <Box className="input-box">
                  <InputLabel>Тип документа</InputLabel>
                  <InputController
                    name="docType"
                    control={control}
                    // rules={identificatorValidation}
                    placeholder="Укажите тип документа"
                  />
                </Box>
                <Divider />
              </Box>
            )}

            {step >= 4 && (
              <Box className="step">
                <Box className="input-box">
                  <InputLabel>Вид документа</InputLabel>
                  <InputController
                    name="docKind"
                    control={control}
                    // rules={identificatorValidation}
                    placeholder="Укажите вид документа"
                    autoFocus
                  />
                </Box>
                <Divider />
              </Box>
            )}

            <ButtonMui variant="contained" onClick={onContinueHandler}>
              Продолжить
            </ButtonMui>
          </form>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default NewDocumentPage
