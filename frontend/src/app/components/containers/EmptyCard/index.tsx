import { useLocation, useNavigate } from "react-router-dom"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Button from "../../../components/UI/Button"
import "./style.scss"

interface EmptyCardProps {
  title: string
  text: string
  btnText: string
  btnPath: string
}

const EmptyCard = ({ title, text, btnText, btnPath }: EmptyCardProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isContragents = pathname.includes("contragents")

  return (
    <Card className="empty-card">
      <Box>
        <CardMedia
          className="media"
          image={`/static/images/${
            isContragents ? "contragents.svg" : "employees.svg"
          }`}
          title="illustration"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
        <Button variant="contained" fullWidth onClick={() => navigate(btnPath)}>
          + {btnText}
        </Button>
      </Box>
    </Card>
  )
}

export default EmptyCard
