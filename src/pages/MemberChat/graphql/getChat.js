import { gql } from '@apollo/client';

export const GET_CHAT = gql`
  query getChat($chatId: ID!) {
    getChatById(chatId: $chatId) {
      id
      messages {
        id
        content
        senderId
        createdAt
        senderType
      }
    }
  }
`;
