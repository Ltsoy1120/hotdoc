import { useState, useEffect, useRef } from "react"
import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../../../hooks/redux"
import { PartialLoginDTO } from "../../../../../../models/auth"
import { confirmCode } from "../../../../../../store/actions/authActions"
import InputController from "../../../../UI/Input/InputController"
import { confirmationValidation } from "../../../../../../helpers/validation"
import authService from "../../../../../../services/auth.service"
import "./CodeForm.scss"

export interface ICodeData {
  code1: string
  code2: string
  code3: string
  code4: string
  code5: string
}

interface CodeFormProps {
  email: string
}
const CodeForm = ({ email }: CodeFormProps) => {
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid }
  } = useForm<ICodeData>({
    mode: "onChange",
    defaultValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: ""
    }
  })
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState<number>(180)
  const [leftTime, setLeftTime] = useState<any>()

  useEffect(() => {
    const runTimer = () => {
      if (seconds <= 180 && seconds > 0) {
        setLeftTime(parseInt(String(seconds / 60)) + ":" + (seconds % 60))
        setSeconds(seconds - 1)
      }
    }
    const timer = setInterval(() => {
      runTimer()
    }, 1000) // every second
    return () => {
      clearInterval(timer)
    }
  }, [seconds])

  const updateCodeHandler = () => {
    authService.updateCode(email)
    setSeconds(180)
  }
  const onSubmit: SubmitHandler<ICodeData> = async data => {
    const codeData: PartialLoginDTO = {
      email: email,
      code: Object.values(data).join("")
    }
    const result = await dispatch(confirmCode(codeData))
    reset()
    if (result) {
      navigate("/new-password")
    }
  }
  const handleInput = (index: number, value: string) => {
    if (value.length === 1) {
      // Focus on the next input if available
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="confirmation-form"
      noValidate
    >
      <div className="confirmation__code">
        <InputController
          name="code1"
          control={control}
          rules={confirmationValidation}
          maxLength={1}
          autoFocus
          inputRef={el => (inputRefs.current[0] = el)}
          onInput={e => handleInput(0, e.target.value)}
        />
        <InputController
          name="code2"
          control={control}
          rules={confirmationValidation}
          maxLength={1}
          inputRef={el => (inputRefs.current[1] = el)}
          onInput={e => handleInput(1, e.target.value)}
        />
        <InputController
          name="code3"
          control={control}
          rules={confirmationValidation}
          maxLength={1}
          inputRef={el => (inputRefs.current[2] = el)}
          onInput={e => handleInput(2, e.target.value)}
        />
        <InputController
          name="code4"
          control={control}
          rules={confirmationValidation}
          maxLength={1}
          inputRef={el => (inputRefs.current[3] = el)}
          onInput={e => handleInput(3, e.target.value)}
        />
        <InputController
          name="code5"
          control={control}
          rules={confirmationValidation}
          maxLength={1}
          inputRef={el => (inputRefs.current[4] = el)}
          onInput={e => handleInput(4, e.target.value)}
        />
      </div>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!isDirty || !isValid}
      >
        Подтвердить
      </Button>
      {seconds ? (
        <div className="confirmation__info">
          <span>Вы можете заново отправить код через:</span>
          <span className="confirmation__info-timer">{leftTime}</span>
        </div>
      ) : (
        <div className="confirmation__info">
          <span>Не пришел код?</span>
          <span
            onClick={updateCodeHandler}
            className="confirmation__info-timer"
          >
            Отправить заново
          </span>
        </div>
      )}
    </form>
  )
}

export default CodeForm
