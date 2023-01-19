import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./store/store";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ResetStyle } from "./style/common/Reset.styled";

export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ResetStyle />

        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
