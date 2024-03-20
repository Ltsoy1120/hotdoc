import React from "react"
import { Link } from "@mui/material"
import { useTranslation } from "react-i18next"
import SimpleTabs from "../../../components/UI/SimpleTabs"
import { registrationTabsData } from "../../../components/UI/SimpleTabs/tabsOptions"
import RegistrationForm from "../../../components/containers/auth/forms/RegistrationForm"
import { CivilType } from "../../../../models/auth"
import "./RegistrationPage.scss"

const RegistrationPage: React.FC = () => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="registration">
      <h2>{t("auth.register.signUp")}</h2>
      <SimpleTabs
        tabsData={registrationTabsData}
        value={value}
        onChange={handleChange}
      >
        {value === 0 ? (
          <RegistrationForm civilType={CivilType.PHYSICAL_PERSON} />
        ) : (
          <RegistrationForm civilType={CivilType.JURIDICAL_PERSON} />
        )}
      </SimpleTabs>
      <p className="registration-form__sign-in">
        {t("auth.register.alreadyHaveAccount")}{" "}
        <Link href="/sign-in" variant="body2">
          {t("auth.register.signIn")}
        </Link>
      </p>
    </div>
  )
}

export default RegistrationPage
