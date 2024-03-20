import { Box, Paper, Typography } from "@mui/material"
import React, { SyntheticEvent, useRef } from "react"
import { FieldError } from "react-hook-form"
import "./style.scss"

interface FileInputProps {
  name: string
  placeholder?: string
  value?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: SyntheticEvent) => void
  error?: FieldError
  fullWidth?: boolean
  autoFocus?: boolean
  multiple?: boolean
}

const FileInput = ({
  name,
  placeholder,
  className,
  autoFocus,
  fullWidth,
  value,
  multiple,
  onChange,
  error,
  onBlur
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const activateInput = () => {
    inputRef.current?.click()
  }
  return (
    <Box className="file-input">
      <Paper variant="outlined" onClick={activateInput}>
        <img src="/static/images/upload.svg" alt="upload-icon" />
        <Typography variant="subtitle2" component="p">
          Нажмите чтобы загрузить
        </Typography>
        <Typography variant="caption">перетащите сюда документ</Typography>
      </Paper>
      <input
        name={name}
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        value={value}
        multiple={multiple}
        onChange={onChange}
      />
    </Box>
  )
}

export default FileInput
