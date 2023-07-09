import { gql } from '@apollo/client';

export const CHAT_SUBSCRIPTION = gql`
  subscription Subscription($data: ChatSubscriptionInput) {
    subscribeToChat(data: $data) {
      id
      content
      createdAt
      senderType
    }
  }
`;
