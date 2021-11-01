import { createTheme } from "@mui/material";
import { getCssVar } from "./getCssVar";

const theme = createTheme({
  palette: {
    common: {
      white: getCssVar("--yy-white-color"),
    },
    error: {
      main: getCssVar("--yy-error-color"),
    },
    background: {
      default: getCssVar("--yy-default-background"),
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: 40,
          marginLeft: 0,
          marginTop: 0,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: getCssVar("--yy-divider-color"),
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
