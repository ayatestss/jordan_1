import { gql } from "@apollo/client";

export const CREATE_CLIENT = gql`
  mutation CreateClient($data: CreateClientInput!) {
    creatClient(data: $data) {
      id
    }
  }
`;
