import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Avatar, Box, Typography } from "@mui/material"
import ProfileData from "../components/ProfileData"
import Modal from "../../../components/modals/Modal"
import ButtonMui from "../../../components/UI/Button"
import SimpleTabs from "../../../components/UI/SimpleTabs"
import { companyProfileTabsData } from "../../../components/UI/SimpleTabs/tabsOptions"
import Header from "../../../components/containers/headers/Header"
import "./style.scss"

const ProfilePage = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box component="main" className="page-wrapper">
      <Header />
      <Box className="page-inner">
        <Box className="profile-page">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant="h4">Ануар Рустемович</Typography>
          <Typography>anuar@datcom.313.kz</Typography>
          <Box className="buttons-group">
            <ButtonMui
              variant="contained"
              onClick={() => navigate("/profile/edit")}
            >
              Редактировать профиль
            </ButtonMui>
            <ButtonMui variant="outlined" onClick={() => setOpen(true)}>
              Выйти
            </ButtonMui>
          </Box>
        </Box>
        <SimpleTabs
          tabsData={companyProfileTabsData}
          value={value}
          onChange={handleChange}
        >
          {value === 0 ? <ProfileData /> : <Box>Настройки уведомлений</Box>}
        </SimpleTabs>
        <Modal
          title="Выйти из профиля"
          content="Вы уверены что хотите выйти из личного кабинета?"
          open={open}
          close={() => setOpen(false)}
          btnHandler={() => navigate("/documents/all")}
        />
      </Box>
    </Box>
  )
}

export default ProfilePage
