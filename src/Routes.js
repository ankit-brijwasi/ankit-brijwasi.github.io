import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f1bb72"
    },
    secondary: {
      main: "#8AF2A4"
    },
    custom: {
      main: "#fff"
    },
    default: {
      main: "#2a2c47"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: ["Roboto Slab", "serif"]
  }
});

theme = responsiveFontSizes(theme);

function Routes(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route to="/" component={Home} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Routes;
