import { gql } from "@apollo/client";

export const MEMBER_BY_ID = gql`
  query MemberById($id: ID!) {
    memberById(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`;
