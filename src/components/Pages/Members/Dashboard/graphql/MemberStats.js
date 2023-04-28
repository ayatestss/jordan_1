import { gql } from "@apollo/client";

export const MEMBER_STATS = gql`
  query MemberById($id: ID!) {
    memberStatsById(id: $id) {
      id
      started
      notStarted
      finished
    }
  }
`;
