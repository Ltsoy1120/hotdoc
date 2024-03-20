import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { setErrorMessage } from "../../../../store/slices/generalErrorSlice"

const GeneralErrorModal = () => {
  const dispatch = useAppDispatch()
  const { message, show, path } = useAppSelector(state => state.generalError)

  const handleClose = () => {
    if (path !== "") {
      window.location.href = path
    }
    dispatch(
      setErrorMessage({
        show: false,
        message: "",
        path: ""
      })
    )
  }

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  )
}
export default GeneralErrorModal
