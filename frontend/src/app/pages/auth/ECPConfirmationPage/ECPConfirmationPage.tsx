import { Button } from "@mui/material"
import React, { useState, useEffect, useCallback } from "react"
import { useAppDispatch } from "../../../../hooks/redux"
import { signService } from "../../../../services/sign.service"
import { verifyXml } from "../../../../store/actions/authActions"
import ECPForm from "../../../components/containers/auth/forms/ECPForm"
import NCALayerForm from "../../../components/containers/auth/forms/NCALayerForm"
import AuthPageTitle from "../../../components/containers/auth/AuthPageTitle/AuthPageTitle"
import "./ECPConfirmationPage.scss"

const ECPConfirmationPage: React.FC = () => {
  const [isNCALayer, setIsNcaLayer] = useState(true)
  const dispatch = useAppDispatch()

  const updateNcaLayer = useCallback((val: boolean) => {
    setIsNcaLayer(val)
  }, [])

  const doVerifyXml = useCallback(
    (payload: string) => {
      dispatch(verifyXml(payload))
    },
    [dispatch]
  )

  useEffect(() => {
    signService.initLayer(updateNcaLayer, doVerifyXml)
  }, [updateNcaLayer, doVerifyXml])

  return (
    <div className="ecp-confirmation">
      <AuthPageTitle title="Подтверждение" />

      {isNCALayer ? (
        <ECPForm />
      ) : (
        <NCALayerForm updateNcaLayer={updateNcaLayer} />
      )}

      <Button fullWidth variant="outlined">
        Помощь
      </Button>
    </div>
  )
}

export default ECPConfirmationPage
