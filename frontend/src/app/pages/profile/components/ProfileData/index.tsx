import { useNavigate } from "react-router-dom"
import { Box, Divider, Paper, Typography } from "@mui/material"
import Button from "../../../../components/UI/Button"
import "./style.scss"

const ProfileData = () => {
  const navigate = useNavigate()
  return (
    <Paper className="profile-data">
      <Box className="data-row">
        <Typography variant="body2">Наименование организации</Typography>
        <Typography variant="h6">ТОО “Bugin Soft”</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">Альтернативное название</Typography>
        <Typography variant="body2">Не заполнено</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">Адрес</Typography>
        <Typography variant="body2">Не заполнено</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">БИН/ИИН компании</Typography>
        <Typography variant="h6">151140002258</Typography>
      </Box>

      <Divider />

      <Box className="data-row">
        <Typography variant="body2">Банк</Typography>
        <Typography variant="body2">Не заполнено</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">ИИК</Typography>
        <Typography variant="body2">Не заполнено</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">БИК</Typography>
        <Typography variant="body2">Не заполнено</Typography>
      </Box>

      <Divider />

      <Box className="data-row">
        <Typography variant="body2">Первый руководитель</Typography>
        <Typography variant="h6">Батыркул Максат</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">ИИН руководителя</Typography>
        <Typography variant="h6">880704114005</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">Номер телефона руководителя</Typography>
        <Typography variant="h6">+7 988 212 11 22</Typography>
      </Box>

      <Box className="data-row">
        <Typography variant="body2">E-mail руководителя</Typography>
        <Typography variant="h6">ceo@buginsof.kz</Typography>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/profile/company/edit")}
      >
        Изменить данные
      </Button>
    </Paper>
  )
}

export default ProfileData
