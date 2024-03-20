import { Box } from "@mui/material"
import React, { useEffect } from "react"
import { useAppDispatch } from "../../../../hooks/redux"
import { getMe } from "../../../../store/actions/authActions"
import Header from "../../../components/containers/headers/Header"

const DocumentsAllPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log("getMe")
    dispatch(getMe())
  }, [dispatch])

  return (
    <Box component="main" className="page-wrapper">
      <Header />
      <Box className="page-inner">
        <div>MyDocumentsPage</div>
      </Box>
    </Box>
  )
}

export default DocumentsAllPage
