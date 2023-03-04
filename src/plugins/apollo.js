import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import App from "./App";

// const client = new ApolloClient({
//   uri: "https://linkify.hasura.app/v1/graphql",
//   cache: new InMemoryCache(),
// });

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://linkify.hasura.app/v1/graphql",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
