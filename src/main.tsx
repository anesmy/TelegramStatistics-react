import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Helmet>
          <meta charSet="UTF-8"></meta>
          <title>Telegram Statistics</title>
          <meta name="keywords" content="Telegram Statistics, Telegram" />
          <meta name="author" content="Anastasiia Mudra"></meta>
        </Helmet>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
