import React from "react"
import "./IdentificatorInfo.scss"

const BinInfo = () => {
  return (
    <div className="identificator-info">
      <div className="identificator-info__col">
        <div className="identificator-info__item">
          <span>Наименование компании</span>
          <p>ТОО “Қамыр”</p>
        </div>
        <div className="identificator-info__item">
          <span>БИН/ИИН компании</span>
          <p>611245341125</p>
        </div>
      </div>
      <div className="identificator-info__col">
        <div className="identificator-info__item">
          <span>Руководитель</span>
          <p>Джеймс Рис</p>
        </div>
        <div className="identificator-info__item">
          <span>ИИН руководителя</span>
          <p>88070411400500</p>
        </div>
      </div>
    </div>
  )
}

export default BinInfo
