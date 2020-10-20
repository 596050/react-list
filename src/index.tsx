import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import { muiTheme, theme, ThemeProvider } from "./util";

import { GlobalStyles } from "./App.styles";

const Root = hot(() => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </MuiThemeProvider>
));

ReactDOM.render(<Root />, document.getElementById("root"));
