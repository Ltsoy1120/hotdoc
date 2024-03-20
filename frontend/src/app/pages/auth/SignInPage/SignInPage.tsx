import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Link } from "@mui/material"
import IdentificatorForm from "../../../components/containers/auth/forms/IdentificatorForm"
import ECPForm from "../../../components/containers/auth/forms/ECPForm"
import NCALayerForm from "../../../components/containers/auth/forms/NCALayerForm"
import SimpleTabs from "../../../components/UI/SimpleTabs"
import { signInTabsData } from "../../../components/UI/SimpleTabs/tabsOptions"
import { signService } from "../../../../services/sign.service"
import { AuthType } from "../../../../models/auth"
import { useAppDispatch } from "../../../../hooks/redux"
import { ecpLogin } from "../../../../store/actions/authActions"
import "./SignInPage.scss"

const SignInPage: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const [isNCALayer, setIsNcaLayer] = useState(true)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    localStorage.removeItem("accessToken")
    const doEcpLogin = async (payload: string, employer: string) => {
      const result = await dispatch(ecpLogin(payload, employer))
      if (result) {
        navigate("/documents/all")
      }
    }
    signService.initLayer(updateNcaLayer, undefined, doEcpLogin)
    localStorage.setItem("auth", AuthType.SIGNIN)
  }, [dispatch, navigate])

  const updateNcaLayer = (val: boolean) => {
    setIsNcaLayer(val)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="sign-in-page">
      <div className="sign-in">
        <h2>Войти в аккаунт</h2>
        <SimpleTabs
          tabsData={signInTabsData}
          value={value}
          onChange={handleChange}
        >
          {value === 0 ? (
            isNCALayer ? (
              <ECPForm />
            ) : (
              <NCALayerForm updateNcaLayer={updateNcaLayer} />
            )
          ) : (
            <IdentificatorForm />
          )}
        </SimpleTabs>
        <Button fullWidth variant="outlined">
          {value === 0 ? "Помощь" : "Войти как сотрудник компании"}
        </Button>
        <p className="sign-in__registration">
          У вас нет аккаунта?{" "}
          <Link href="/registration" variant="body2">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
