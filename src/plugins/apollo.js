import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { ApolloLink, from } from "apollo-link";

const cache = new InMemoryCache({
  addTypename: false,
});

const default_http_link = createHttpLink({
  uri: "https://linkify.hasura.app/v1/graphql",
});

const default_error_link = onError(({ graphQLErrors, networkError }) => {
  if (
    graphQLErrors &&
    graphQLErrors[0].message === "invalid token: record not found"
  ) {
    // TODO: show session expired message

    return;
  }
});

const default_auth_link = new ApolloLink((operation, forward) => {
  // const userStore = useUserStore();

  const { headers } = operation.getContext();

  const h = {
    ...headers,
  };

  // if (userStore.isLoggedIn) {
  if (false) {
    // h.authorization = `Bearer ${userStore.custom_access_token}`;
    h.authorization = `Bearer aakshdakjshddjasljhsadasdnj`;
  }

  operation.setContext({
    headers: h,
  });

  return forward(operation);
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists

//   // const token = localStorage.getItem("authToken");

//   // return the headers to the context so HTTP link can read them
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const default_apollo_client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: from([default_auth_link, default_error_link, default_http_link]),
  cache,
});
export { default_apollo_client };
