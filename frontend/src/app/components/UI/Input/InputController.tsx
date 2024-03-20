import { Controller } from "react-hook-form"
import FileInput from "./FileInput"
import Input from "."

interface InputControllerProps {
  name: string
  control: any
  rules?: any
  placeholder?: string
  type?: string
  fullWidth?: boolean
  autoFocus?: boolean
  required?: boolean
  multiple?: boolean
  status?: string
  maxLength?: number
  startIconName?: string
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputController = ({
  name,
  control,
  rules,
  placeholder,
  type,
  fullWidth,
  autoFocus,
  required,
  multiple,
  status,
  startIconName,
  maxLength,
  inputRef,
  onInput
}: InputControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) =>
        type === "file" ? (
          <FileInput
            name={name}
            placeholder={placeholder}
            value={value}
            multiple={multiple}
            // onChange={e => {
            //   onChange(
            //     (e.target as HTMLInputElement) &&
            //       e.target.files &&
            //       e.target.files[0].name
            //   )
            // }}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            autoFocus={autoFocus}
            fullWidth={fullWidth}
          />
        ) : (
          <Input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            type={type}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
            required={required}
            status={status}
            maxLength={maxLength}
            startIconName={startIconName}
            inputRef={inputRef}
            onInput={onInput}
          />
        )
      }
    />
  )
}

export default InputController
