import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./store/store";

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
