import { gql } from "@apollo/client";
let login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      first_name
      last_name
      token
    }
  }
`;

export default login;
