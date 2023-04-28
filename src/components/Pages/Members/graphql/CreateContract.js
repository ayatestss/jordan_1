import { gql } from "@apollo/client";

export const CREATE_CONTRACT = gql`
  mutation CreateContract($data: CreateContractInput!) {
    createContract(data: $data) {
      id
    }
  }
`;
