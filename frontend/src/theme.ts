import { createTheme } from "@mui/material"

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string
    gray50?: string
    gray100?: string
    gray200?: string
    gray300?: string
  }

  interface SimplePaletteColorOptions {
    lighter?: string
    gray50?: string
    gray100?: string
    gray200?: string
    gray300?: string
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      lighter: "#fff6ed", //50
      light: "#ffdbc6", //300
      main: "#ffb589", //400
      dark: "#fe6b13" //600
    },
    secondary: {
      gray50: "#f9fafb", //50
      gray100: "#f2f4f7", //100
      gray200: "#eaecf0", //200
      gray300: "#d0d5dd", //300
      light: "#98a2b3", //400
      main: "#667085", //500
      dark: "#344054" //700
    },
    success: {
      light: "#ECFDF3", //50
      main: "#12B76A",
      dark: "#027A48"
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        // выпадающий список
        paper: {
          borderRadius: "8px",
          marginTop: 2,
          boxShadow: "0px 4px 6px -2px #10182814"
        }
      }
    }
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     .page-wrapper {
    //       min-height: 100svh;
    //       height: max-content;
    //       display: flex;
    //       flex-grow: 1;
    //     }
    //     .page-inner {
    //       flex-grow: 1;
    //       background-color: #f9fafb;
    //       padding: 20px;
    //       margin-top: 72px;
    //     }
    //   `
    // }
  }
})

export const drawerWidth = 300
