import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import createMuiTheme, { Theme } from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "../store/user/user.reducer";
import createSagaMiddleware from "redux-saga";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const rootReducer = combineReducers({
  user: userReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MaterialUIThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
});

export default MyApp;
