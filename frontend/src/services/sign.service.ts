import { AuthType } from "../models/auth"

const NCALAYER_URL = "wss://127.0.0.1:13579/"
export let ws: any = null

export const signService = {
  initLayer(
    updateNcaLayer: (val: boolean) => void,
    doVerifyXml?: (payload: string) => void,
    doEcpLogin?: (payload: string, employer: string) => void
  ) {
    if (ws) {
      return
    }
    ws = new WebSocket(NCALAYER_URL)

    ws.onopen = () => {
      console.log("Соединение установлено")
      updateNcaLayer(true)
    }

    ws.onerror = () => {
      console.log("Соединение  не установлено")
      updateNcaLayer(false)
    }

    ws.onclose = (event: CloseEvent) => {
      if (event.wasClean) {
        console.log("connection has been closed")
      } else {
        console.log("Connection error")
        updateNcaLayer(false)
        ws.close()
        ws = null
      }
    }

    ws.onmessage = async (event: MessageEvent) => {
      const result = JSON.parse(event.data)
      console.log("result", result)

      if (result.code === "200" && result.responseObject) {
        const xml = result.responseObject
        const auth = localStorage.getItem("auth")

        if (auth === AuthType.REGISTRATION && doVerifyXml) {
          doVerifyXml(xml)
        }
        if (auth === AuthType.SIGNIN && doEcpLogin) {
          doEcpLogin(xml, "")
        }
      }
      console.log("--------------------------")
      console.log("onmessage event: ", event)
    }
  },

  getFileECP() {
    if (ws) {
      ws.send(
        JSON.stringify({
          method: "browseKeyStore",
          args: ["PKCS12", "P12", ""]
        })
      )
    }
  },

  signXml() {
    const xml = "<root>--registration--</root>"
    if (ws) {
      ws.send(
        JSON.stringify({
          module: "kz.gov.pki.knca.commonUtils",
          method: "signXml",
          args: ["PKCS12", "AUTH", xml, "", ""]
        })
      )
    }
  },
  // helpers:
  getDnInfoProperty(dsInfo: string, prop: string) {
    const arr = dsInfo.split(",")
    let value = null
    arr.forEach(str => {
      if (str.indexOf(prop + "=") < 0) {
        return
      }
      const strLst = str.split("=")
      if (strLst && strLst.length > 1) {
        value = strLst[1]
      }
    })
    return value
  }
}

// doVerifySignature(signature: string): void {
//   const employer = this.isExecutor ? this.employer.value : "";
//   this.api
//     .ecpLogin(signature, employer)
//     .pipe(takeUntil(this.unsubscribe$))
//     .subscribe(
//       (response) => {
//         // console.log('ecp response: ', response);
//         localStorage.setItem("access_token", response.accessToken);
//         this.router.navigate(["/cabinet/documents/incoming"]);
//       },
//       (error) => {
//         this.handleError(error);
//       }
//     );
// }
