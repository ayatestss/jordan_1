import { gql } from "@apollo/client";

export const CLIENT_BY_EMAIL = gql`
  query ClientByEmail($email: String!) {
    clientByEmail(email: $email) {
      id
    }
  }
`;
