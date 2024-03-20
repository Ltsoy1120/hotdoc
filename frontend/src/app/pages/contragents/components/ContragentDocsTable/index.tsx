import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import Icon from "../../../../components/UI/Icon"
import { DocumentDTO } from "../../../../../models/documents"
import { classMerge } from "../../../../../helpers/common"
import "./style.scss"

interface ContragentsTableProps {
  contragentDocs: DocumentDTO[]
  handleDelete?: (id: number) => void
}

const ContragentDocsTable = ({
  contragentDocs,
  handleDelete
}: ContragentsTableProps) => {
  const navigate = useNavigate()

  const getBadgeClass = (status: string) => {
    switch (status) {
      case "Создано":
        return "create"
      case "На подписи":
        return "onSign"
      case "На согласовании":
        return "awaitingApproval"
      case "Подписан":
        return "signed"
      default:
        break
    }
  }

  return (
    <TableContainer component={Paper} className="contrgent-docs-table">
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Название документа</TableCell>
            <TableCell>Дата создания</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contragentDocs.map(doc => (
            <TableRow key={doc.id}>
              <TableCell component="th">
                <Box className="docs-info">
                  <p>{doc.name}</p>
                  <span>{doc.docType}</span>
                </Box>
              </TableCell>
              <TableCell>{doc.createdAt}</TableCell>
              <TableCell>
                <span
                  className={classMerge("badge", getBadgeClass(doc.status))}
                >
                  {doc.status}
                </span>
              </TableCell>
              <TableCell>
                <Icon
                  name="chevron-right"
                  size={15}
                  onClick={() => {
                    navigate(`/documents/${doc.id}`)
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContragentDocsTable
