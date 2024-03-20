import { DocumentDTO } from "./documents"

export interface ContragentDTO {
  id: number
  name: string
  alternativeName?: string
  email: string
  identificator: string
  documents?: DocumentDTO[]
}
