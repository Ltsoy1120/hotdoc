import InputMask from "react-input-mask"
import { Controller } from "react-hook-form"
import Input from "."

interface InputMaskControllerProps {
  name: string
  control: any
  rules: any
  placeholder?: string
  type?: string
  fullWidth?: boolean
  autoFocus?: boolean
  status?: string
}

const InputMaskController = ({
  name,
  control,
  rules,
  placeholder,
  type,
  fullWidth,
  autoFocus,
  status
}: InputMaskControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error }
      }) => (
        <InputMask
          mask="+79999999999"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <Input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            fullWidth={fullWidth}
          />
        </InputMask>
      )}
    />
  )
}

export default InputMaskController
