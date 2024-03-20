import { useNavigate } from "react-router-dom"
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box
} from "@mui/material"
import Icon from "../../../UI/Icon"
import { ContragentDTO } from "../../../../../models/contragents"
import { DocumentDTO } from "../../../../../models/documents"
import { classMerge } from "../../../../../helpers/common"
import "./style.scss"

interface ContragentsTableProps {
  contragents: ContragentDTO[]
}

const ContragentsTable = ({ contragents }: ContragentsTableProps) => {
  const navigate = useNavigate()

  const getStatuses = (documents: DocumentDTO[]) => {
    const docStatuses = {
      create: 0,
      onSign: 0,
      awaitingApproval: 0,
      signed: 0
    }

    documents.forEach(doc => {
      switch (doc.status) {
        case "Создано":
          docStatuses.create++
          break
        case "На подписи":
          docStatuses.onSign++
          break
        case "На согласовании":
          docStatuses.awaitingApproval++
          break
        case "Подписан":
          docStatuses.signed++
          break
        default:
          break
      }
    })
    return docStatuses
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "create":
        return "создана"
      case "onsign":
        return "на подписи"
      case "awaitingapproval":
        return "ожидает согласование"
      case "signed":
        return "подписано"
      default:
        break
    }
  }

  return (
    <TableContainer component={Paper} className="contragents-table">
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Название контрагента</TableCell>
            <TableCell>БИН/ИИН</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Статусы документов</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contragents.map(contragent => {
            const docStatuses = (contragent.documents &&
              getStatuses(contragent.documents)) || {
              create: 0,
              onSign: 0,
              awaitingApproval: 0,
              signed: 0
            }
            return (
              <TableRow key={contragent.id}>
                <TableCell>{contragent.name}</TableCell>
                <TableCell>{contragent.identificator}</TableCell>
                <TableCell>{contragent.email}</TableCell>
                <TableCell>
                  <Box className="statuses">
                    {Object.entries(docStatuses).map(
                      ([status, count]) =>
                        count > 0 && (
                          <p key={status}>
                            <span
                              className={classMerge("status-marker", status)}
                            ></span>
                            {count} {getStatusText(status.toLowerCase())}
                          </p>
                        )
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Icon
                    name="chevron-right"
                    size={15}
                    onClick={() => {
                      navigate(`/contragents/${contragent.id}`)
                    }}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContragentsTable
