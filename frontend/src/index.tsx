import ReactDOM from "react-dom/client"
import { Suspense } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { setupStore } from "./store"
import "./i18n"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme"
import App from "./App"
export const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div>Загрузка...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)
