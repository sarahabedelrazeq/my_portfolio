import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
