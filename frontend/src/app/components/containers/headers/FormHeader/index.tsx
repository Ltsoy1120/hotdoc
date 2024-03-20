import { useLocation, useNavigate } from "react-router-dom"
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form"
import { AppBar, Toolbar, Box, Typography } from "@mui/material"
import { getHeaderTitle } from "../headerTitles"
import Icon from "../../../UI/Icon"
import Button from "../../../UI/Button"
import "./style.scss"

interface IHeaderProps<T extends FieldValues> {
  btnText?: string
  onSubmit: SubmitHandler<T>
}

const FormHeader = <T extends FieldValues>({
  btnText,
  onSubmit
}: IHeaderProps<T>) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleGoBack = () => {
    navigate(-1)
  }

  const methods = useFormContext<T>()
  const {
    formState: { isDirty, isValid }
  } = methods

  return (
    <AppBar className="form-header">
      <Toolbar>
        <Box>
          <Icon
            name="back"
            size="16"
            style={{ marginRight: 20 }}
            onClick={handleGoBack}
          />
          <Box>
            <Typography variant="h6" noWrap>
              {getHeaderTitle(pathname)?.title}
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              dangerouslySetInnerHTML={{
                __html: getHeaderTitle(pathname)?.subtitle || ""
              }}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={methods?.handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        >
          {btnText ?? "Сохранить изменения"}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default FormHeader
