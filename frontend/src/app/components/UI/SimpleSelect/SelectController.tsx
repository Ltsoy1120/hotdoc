import { Controller } from "react-hook-form"
import SimpleSelect from "."

interface SelectControllerProps {
  name: string
  control: any
  rules?: any
  placeholder?: string
  options?: any
}
const SelectController = ({
  name,
  control,
  rules,
  placeholder,
  options
}: SelectControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error }
      }) => (
        <SimpleSelect
          name={name}
          placeholder={placeholder}
          value={value}
          data={options}
          onChange={onChange}
          // onBlur={onBlur}
          // error={error}
          // autoFocus={autoFocus}
          // fullWidth={fullWidth}
        />
      )}
    />
  )
}

export default SelectController
