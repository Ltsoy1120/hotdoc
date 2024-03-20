import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Icon from "../Icon"
import "./style.scss"

interface SelectProps {
  data: { value: string; label?: string; id: string }[]
  placeholder?: string
  width?: number
  mr?: number
  mb?: number
  name?: string
  value?: string
  required?: boolean
  onChange?: (e: SelectChangeEvent) => void
}
const SimpleSelect: React.FC<SelectProps> = ({
  data,
  placeholder,
  width,
  mr,
  mb,
  name,
  value,
  required,
  onChange
}) => {
  return (
    <Select
      className="select"
      value={value}
      onChange={onChange}
      required={required}
      displayEmpty
      renderValue={() => {
        if (!value) {
          return <em>{placeholder}</em>
        }
        return value
      }}
      style={{
        width,
        marginRight: mr,
        marginBottom: mb
      }}
    >
      {data &&
        data.map(item => {
          return (
            <MenuItem
              value={item.label ?? item.value}
              key={item.id}
              style={{
                minWidth: 150,
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              {item.value}
              {value === item.label || value === item.value ? (
                <Icon name="select-check" size={20} />
              ) : null}
            </MenuItem>
          )
        })}
    </Select>
  )
}

export default SimpleSelect
