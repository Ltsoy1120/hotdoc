import { useState, useEffect } from "react"
import { Box, Switch } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import Header from "../../../components/containers/headers/Header"
import SubHeader from "../../../components/containers/headers/SubHeader"
import EmptyCard from "../../../components/containers/EmptyCard"
import ContragentsTable from "../../../components/containers/tables/ContragentsTable"
import { setContragents } from "../../../../store/slices/contragentsSlice"
import { ContragentDTO } from "../../../../models/contragents"
import "./style.scss"

const ContragentsPage = () => {
  const dispatch = useAppDispatch()
  const contragents: ContragentDTO[] = useAppSelector(
    state => state.contragents.contragents
  )
  const [isEmpty, setEmpty] = useState(false) // временно для демонстрации

  useEffect(() => {
    dispatch(setContragents(contragents))
  }, [dispatch, contragents])

  // временно для демонстрации
  const handleChange = () => {
    setEmpty(!isEmpty)
  }

  // const handleDelete = (id: number) => {
  //   const newContragent: ContragentDTO[] = contragents.filter(
  //     (item: ContragentDTO) => item.id !== id
  //   )
  //   dispatch(setContragents(newContragent))
  // }

  return (
    <Box component="main" className="page-wrapper">
      <Header />
      <Box className="page-inner">
        <Box className="contragent-page">
          <SubHeader page="contragents" />
          <Switch
            checked={!isEmpty}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {!isEmpty && contragents.length ? (
            <ContragentsTable contragents={contragents} />
          ) : (
            <EmptyCard
              title="У вас еще нет контрагентов"
              text="Вы можете добавить своих контрагентов чтобы они могли
              работать от имени компании."
              btnText="Добавить контрагентов"
              btnPath="/contragents/new"
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ContragentsPage
