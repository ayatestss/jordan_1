import { gql } from "@apollo/client";

export const QUERY_CONTRACT_BY_ID = gql`
  query ContractById($id: ID!) {
    contractById(id: $id) {
      id
      client {
        firstName
        lastName
        email
      }
      photos
      eta
      stage
    }
  }
`;
