import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {store, persistor} from "./Redux/store";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
   <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
   </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
