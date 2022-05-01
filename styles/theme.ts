import { createTheme } from "@mui/material";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#f00",
    },
    secondary: {
      main: "#0f0",
    },
  },
  typography: {
    fontFamily: "Roboto",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem",
    },
  },
  shape: {
    borderRadius: 30,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: 800,
        },
      },
    },
  },
});
