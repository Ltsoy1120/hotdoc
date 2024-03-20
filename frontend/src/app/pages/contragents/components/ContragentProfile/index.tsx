import { Box, Typography } from "@mui/material"
import { ContragentDTO } from "../../../../../models/contragents"
import "./style.scss"

interface ContragentProfileProps {
  contragent: ContragentDTO
}

const ContragentProfile = ({ contragent }: ContragentProfileProps) => {
  return (
    <Box className="contragent-profile">
      <Box className="data-col">
        <Typography variant="h5">{contragent?.name}</Typography>
        <Typography variant="body1">{contragent?.identificator}</Typography>
      </Box>

      <Box className="data-col">
        <Typography variant="h6">Азимханов Рустем</Typography>
        <Typography variant="body2">{contragent?.email}</Typography>
      </Box>
    </Box>
  )
}

export default ContragentProfile
