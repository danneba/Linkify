import { gql } from "@apollo/client";
let Host_Login = gql`
  mutation Login($email: String!, $password: String!) {
    hostLogin(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

export default Host_Login;
