import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@mui/material"
import Button from "../../UI/Button"
import "./style.scss"

interface IModalProps {
  title: string
  content: string
  open: boolean
  close: () => void
  btnHandler: () => void
}

const Modal = ({ title, content, open, close, btnHandler }: IModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      className="modal"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={close}>
          Отмена
        </Button>
        <Button variant="contained" onClick={btnHandler}>
          Выйти
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
