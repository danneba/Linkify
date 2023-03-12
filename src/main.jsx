import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { default_apollo_client } from "./plugins/apollo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Auth0Provider } from "@auth0/auth0-react";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <Auth0Provider
      domain="dev-zj81qi0t.us.auth0.com"
      clientId="eBzrqiU8iInr8Ia2kZRhiEBTFodQ79fI"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/home",
      }}
    >
      <ApolloProvider client={default_apollo_client}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </Auth0Provider>
  </>
);
