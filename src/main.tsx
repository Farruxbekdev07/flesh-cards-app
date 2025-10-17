import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import { getTheme } from "./styles/theme";
import { store, RootState } from "./redux/store";

const Root = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
