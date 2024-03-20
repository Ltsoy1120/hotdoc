import * as React from "react"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@mui/material"
import "./QRModal.scss"

interface IQRModalProps {
  open: boolean
  close: () => void
}

const QRModal = ({ open, close }: IQRModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      className="qr-modal"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Скачайте приложения использую сканер телефона
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Отсканируйте QR код чтобы скачать мобильное приложения
        </DialogContentText>
        <div className="qr">
          <img src="static/images/qr.svg" alt="qr" />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>
          <img src="static/images/google-pay-gray.svg" alt="google-pay" />
        </Button>
        <Button onClick={close}>
          <img src="static/images/app-store-gray.svg" alt="app-store" />
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default QRModal
