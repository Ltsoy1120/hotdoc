import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import LinkHeader from "../../../components/containers/headers/LinkHeader"
import { ContragentDTO } from "../../../../models/contragents"
import { useAppSelector } from "../../../../hooks/redux"
import ContragentProfile from "../components/ContragentProfile"
import ContragentDocsTable from "../components/ContragentDocsTable"
import EmptyCard from "../../../components/containers/EmptyCard"
import "./style.scss"

const ContragentById = () => {
  const contragentId = useParams().id
  const contragents = useAppSelector(state => state.contragents.contragents)
  const [contragent, setContragent] = useState<ContragentDTO>()

  useEffect(() => {
    const result = contragents.find(
      contragent => contragent?.id === Number(contragentId)
    )
    setContragent(result)
  }, [contragents, contragentId])

  return (
    <Box component="main" className="page-wrapper">
      <LinkHeader
        btnText="Редактировать"
        path={`/contragents/edit/${contragentId}`}
      />
      <Box className="page-inner">
        {/* условие можно будет удалить при получении контрагента через бэк по id */}
        {contragent && (
          <Box className="contragent-id-page">
            <ContragentProfile contragent={contragent} />

            {contragent.documents?.length ? (
              <ContragentDocsTable contragentDocs={contragent?.documents} />
            ) : (
              <EmptyCard
                title="У контрагента еще нет документов"
                text="Вы можете создать новый документ"
                btnText="Создать документ"
                btnPath="/documents/new"
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ContragentById
