import { Button as MuiButton } from "@mui/material"
import Icon from "../Icon"
import "./style.scss"

interface ButtonMuiProps {
  variant?: "contained" | "outlined"
  color?: "primary" | "secondary"
  fullWidth?: boolean
  startIconName?: string
  endIconName?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const Button = ({
  variant,
  color,
  fullWidth,
  startIconName,
  endIconName,
  children,
  onClick,
  disabled
}: ButtonMuiProps) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      startIcon={startIconName ? <Icon name={startIconName} size="20" /> : null}
      endIcon={endIconName ? <Icon name={endIconName} size="20" /> : null}
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  )
}

export default Button
