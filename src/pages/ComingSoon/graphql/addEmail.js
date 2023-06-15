import { gql } from "@apollo/client";

export const CREATE_EMAIL = gql`
  mutation CreateEmail($data: CreateEmailInput!) {
    createEmail(data: $data) {
      id
    }
  }
`;
