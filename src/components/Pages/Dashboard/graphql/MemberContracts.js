import { gql } from "@apollo/client";

export const MEMBER_CONTRACTS = gql`
  query MemberById($id: ID!) {
    memberById(id: $id) {
      id
      contracts {
        id
        client {
          firstName
          lastName
        }
        createdAt
        updatedAt
      }
    }
  }
`;
