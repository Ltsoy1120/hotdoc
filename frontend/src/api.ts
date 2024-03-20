export const BASE_URL =
  process.env.REACT_APP_BASE_URL ?? "https://datcom.313.kz/"

export const API_URL = {
  api: `${BASE_URL}api/v1`,
  api2: `${BASE_URL}api/v2`,
  accountApi: `${BASE_URL}account-service/api/v1`,
  inboxApi: `${BASE_URL}inbox-service/api/v2`,
  contragentApi: `${BASE_URL}contragent-service/api/v1`,
  edsApi: `${BASE_URL}eds-service/api/v1`,
  cvDocsApi: `${BASE_URL}cv-document-service/api/v1`,
  storageApi: `${BASE_URL}storage-service/api/v1`,
  signatureApi: `${BASE_URL}signature-service/api/v1`,
  gmDocApi: `${BASE_URL}gm-document-service/api/v1`,
  notificationApi: `${BASE_URL}notification-service/api/v1`,
  paymentApi: `${BASE_URL}payment-service/api/v1`
}
