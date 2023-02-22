import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BusquedaContextProvider from "./Contexts/BusquedaContext";
import HomeContextProvider from "./Contexts/HomeContext";
import PropIdContextProvider from "./Contexts/PropIdContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PropIdContextProvider>
        <HomeContextProvider>
          <BusquedaContextProvider>
            <App />
          </BusquedaContextProvider>
        </HomeContextProvider>
      </PropIdContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
