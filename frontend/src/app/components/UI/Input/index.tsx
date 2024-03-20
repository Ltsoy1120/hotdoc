import React, { SyntheticEvent } from "react"
import { InputAdornment, TextField } from "@mui/material"
import { FieldError } from "react-hook-form"
import Icon from "../Icon"
import "./style.scss"
import { classMerge } from "../../../../helpers/common"

interface InputProps {
  name: string
  placeholder?: string
  type?: string
  value: string
  onChange: (e: SyntheticEvent) => void
  onBlur?: (e: SyntheticEvent) => void
  error?: FieldError
  fullWidth?: boolean
  autoFocus?: boolean
  required?: boolean
  status?: string
  maxLength?: number
  startIconName?: string
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  status,
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  error,
  maxLength,
  fullWidth,
  autoFocus,
  required,
  startIconName,
  inputRef,
  onInput
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false)
  // console.log("Input Error====", error)
  const handleClickShowPassword = () => setShowPassword(show => !show)

  const props = {
    endAdornment: (
      <InputAdornment position="end">
        {type === "password" &&
          (!showPassword ? (
            <Icon name="eye" size={16} onClick={handleClickShowPassword} />
          ) : (
            <Icon name="eye-off" size={16} onClick={handleClickShowPassword} />
          ))}
        {status === "loading" && <Icon name="loader" size={16} />}
        {status === "success" && <Icon name="success" size={16} />}
      </InputAdornment>
    ),
    startAdornment: (
      <InputAdornment position="start">
        {/* {name === "search" && <Icon name="search" size="20" />} */}
        {startIconName && <Icon name={startIconName} size="20" />}
      </InputAdornment>
    )
  }

  return (
    <TextField
      id={name}
      placeholder={placeholder}
      name={name}
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={error ? error.message : null}
      error={!!error}
      variant="outlined"
      margin="normal"
      required={required}
      fullWidth={fullWidth}
      autoComplete={name}
      autoFocus={autoFocus}
      size="small"
      className={classMerge("input", status ?? "")}
      inputRef={inputRef}
      onInput={onInput}
      InputProps={status || type === "password" || startIconName ? props : {}}
      inputProps={{ maxLength }}
    />
  )
}

export default Input
