export interface DocumentDTO {
  id?: string
  name: string
  createdAt: string
  status: string
  contragent: string
  docType: string

  createTime?: Date
  updatedTime?: Date
  docFiles?: []
  docKind?: string
  coordination?: string
  docRoute?: []
  needAuth?: false
  updatedAt?: string
}
