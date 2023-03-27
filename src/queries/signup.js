import { gql } from "@apollo/client";
const userSignup = gql`
  mutation (
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
  ) {
    sign_up(
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
    ) {
      id
      token
    }
  }
`;

const hostSignup = gql`
  mutation (
    $address: String
    $email: String!
    $host_name: String!
    $image: String
    $password: String!
    $phone: String
    $thumbnail: String
    $website: String
  ) {
    hostSignup(
      address: $address
      email: $email
      host_name: $host_name
      image: $image
      password: $password
      phone: $phone
      thumbnail: $thumbnail
      website: $website
    ) {
      id
      token
    }
  }
`;

export { userSignup, hostSignup };
