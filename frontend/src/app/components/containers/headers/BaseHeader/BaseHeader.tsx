import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { SelectChangeEvent } from "@mui/material"
import SimpleSelect from "../../../UI/SimpleSelect"
import { langData } from "../../../UI/SimpleSelect/selectOptions"
import logo from "./logo.png"
import "./BaseHeader.scss"

const BaseHeader = () => {
  const { i18n } = useTranslation()
  const [lang, setLang] = React.useState("Рус")

  useEffect(() => {
    switch (localStorage.getItem("i18nextLng")) {
      case "kz":
        setLang("Қаз")
        break
      case "en":
        setLang("Eng")
        break
      default:
        setLang("Рус")
        break
    }
  }, [])

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value)
    switch (event.target.value) {
      case "Қаз":
        i18n.changeLanguage("kz")
        break
      case "Eng":
        i18n.changeLanguage("en")
        break
      default:
        i18n.changeLanguage("ru")
        break
    }
  }

  return (
    <div className="base-header">
      <div className="base-header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="base-header__lang">
        <SimpleSelect
          data={langData}
          placeholder={lang}
          value={lang}
          onChange={handleChange}
          width={85}
        />
      </div>
    </div>
  )
}

export default BaseHeader
