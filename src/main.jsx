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

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <ApolloProvider client={default_apollo_client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </>
);
