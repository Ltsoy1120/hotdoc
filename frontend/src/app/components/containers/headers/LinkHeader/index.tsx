import { useLocation, useNavigate } from "react-router-dom"
import { AppBar, Toolbar, Box, Typography } from "@mui/material"
import { getHeaderTitle } from "../headerTitles"
import Icon from "../../../UI/Icon"
import Button from "../../../UI/Button"
import "./style.scss"

interface LinkHeaderProps {
  btnText: string
  path: string
}

const LinkHeader = ({ btnText, path }: LinkHeaderProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <AppBar className="link-header">
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

        <Button variant="contained" onClick={() => navigate(path)}>
          {btnText}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default LinkHeader
