import { Button } from "@mui/material"
import { signService } from "../../../../../../services/sign.service"
import "./NCALayerForm.scss"

interface NCALayerFormProps {
  updateNcaLayer: (val: boolean) => void
}
const NCALayerForm = ({ updateNcaLayer }: NCALayerFormProps) => {
  const onClickHandler = () => {
    signService.initLayer(updateNcaLayer)
  }

  return (
    <div className="ncalayer">
      <div className="ncalayer__content">
        <img src="static/images/nca-layer.svg" alt="nca-layer" />
        <div className="ncalayer__content-text">
          <span style={{ color: "red" }}>У вас не запущен NCALayer</span>
          <span>Убедитесь что программа NCALayer </span>
          <span style={{ color: "#667085" }}>
            Скачайте NCALayer здесь:{" "}
            <a href="https://pki.gov.kz/ncalayer/">pki.gov.kz/ncalayer/</a>
          </span>
        </div>
      </div>

      <Button fullWidth variant="contained" onClick={() => onClickHandler()}>
        Я запустил NCALayer
      </Button>
    </div>
  )
}

export default NCALayerForm
