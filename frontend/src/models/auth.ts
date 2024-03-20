//auth
export interface IAccount {
  accountName: string //"Цой Елена Геннадьевна"
  accountType: string //"PERSON"
  avatar: string | null
  createTime: string //"2023-07-21T17:21:05.77+06:00"
  dskExpires: string | null
  email: string //"lena_tsoy@list.ru"
  firstname: string //"ЕЛЕНА"
  id: string //"64ba6a2106aa961ed082608e"
  identificator: string //"751120401609"
  lang: string //"ru"
  location: string | null
  middlename: string //"ГЕННАДЬЕВНА"
  secondname: string //"ЦОЙ"
  state: string | null
  director?: {
    name: string
    iin: string
    phoneNumber: string
    email: string
  }
}

//входящие
//https://datcom.313.kz/inbox-service/api/v2/documents/incoming/count

export enum AuthType {
  REGISTRATION = "Регистрация",
  SIGNIN = "Войти"
}

export interface PartialRegistrationDTO {
  email: string
  lang: string
  phoneNumber: string
  identificator?: string
}

export interface PartialRegistrationResponse {
  message: string
  status: boolean
  token: null
}

export interface PartialLoginDTO {
  email: string
  code: string
}

export interface AccountTokenDTO {
  accessToken: string
  refreshToken: string | null
}

export enum CivilType {
  PHYSICAL_PERSON = "PHYSICAL_PERSON",
  JURIDICAL_PERSON = "JURIDICAL_PERSON"
  // SOLO_ENTREPRENEUR = "SOLO_ENTREPRENEUR",
}

export interface FinishRegistrationDTO {
  civilType: CivilType
  email: string
  phoneNumber: string
  identificator?: string
  password: string
  signature: string
  // bankDataDTO?: BankDataDTO;
  // state?: string;
  // legalAddress?: string;
  // location?: string;
}

export interface LoginDTO {
  identificator: string
  password: string
}
