// theme.ts
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // Light mode ranglari
            primary: { main: "#19c6d2ff" },
            background: { default: "#f5f5f5", paper: "#fff" },
          }
        : {
            // Dark mode ranglari
            primary: { main: "#90caf9" },
            background: { default: "#121212", paper: "#1d1d1d" },
          }),
    },
    typography: {
      fontFamily: `"Roboto", "Arial", sans-serif`,
    },
  });
