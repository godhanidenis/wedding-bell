import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation signUp(
    $first_name: String!
    $last_name: String!
    $user_email: String
    $user_contact: String!
    $user_password: String!
    $user_type: String!
  ) {
    signUp(
      input: {
        first_name: $first_name
        last_name: $last_name
        user_email: $user_email
        user_contact: $user_contact
        user_password: $user_password
        user_type: $user_type
      }
    ) {
      token
      message
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation signIn($username: String!, $password: String!, $type: String!) {
    signIn(input: { username: $username, password: $password, type: $type }) {
      token
      message
    }
  }
`;
