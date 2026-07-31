import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B3C91",
    },

    secondary: {
      main: "#E53935",
    },

    background: {
      default: "#F8FAFC",
    },
  },

  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;
