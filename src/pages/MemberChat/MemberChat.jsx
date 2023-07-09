import React, { useEffect, useState, useRef } from 'react';
import { Box, IconButton, List, ListItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { GET_CHAT } from './graphql/getChat';
import { ChatBubble } from './components/ChatBubble';
import { CHAT_SUBSCRIPTION } from './graphql/subscribeToChat';
import { CREATE_MESSAGE_MUTATION } from './graphql/createMessage';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { id } = useParams();
  const { data, loading, error, refetch } = useQuery(GET_CHAT, {
    variables: {
      chatId: id,
    },
  });
  const { data: subData } = useSubscription(CHAT_SUBSCRIPTION, {
    variables: {
      data: {
        chatId: id,
      },
    },
  });

  const [createMessage] = useMutation(CREATE_MESSAGE_MUTATION);

  const getChatMemberIds = (arr) => {
    const uniqueIds = new Set();
    const result = [];

    for (const obj of arr) {
      if (!uniqueIds.has(obj.senderId)) {
        uniqueIds.add(obj.senderId);
        result.push(obj.senderId);
      }

      if (result.length === 2) {
        break;
      }
    }

    return result;
  };

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [memberIds, setMemberIds] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (subData) {
      refetch();
    }
  }, [subData]);

  useEffect(() => {
    if (!loading && data) {
      setMessages(data.getChatById.messages);
      const ids = getChatMemberIds(data.getChatById.messages);
      setMemberIds(ids);
    }
  }, [data]);

  const handleMessageSend = async (e) => {
    e.preventDefault();

    try {
      const { data: response } = await createMessage({
        variables: {
          data: {
            content: message,
            senderId: '647c9974446c4f2f4004b927',
            senderType: 'USER',
            chatId: '648b93dbb21840cf5edfe616',
          },
        },
        update: (cache, { data }) => {
          // Update the cache manually with the new message
          const newMessage = data.createMessage;
          cache.modify({
            id: cache.identify(data.getChatById),
            fields: {
              messages(existingMessages = []) {
                return [...existingMessages, newMessage];
              },
            },
          });
        },
      });

      refetch();
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100%',
      }}
    >
      <Box
        sx={{
          flex: '1 1 auto',
          overflowY: 'auto',
          marginBottom: 'auto',
        }}
      >
        <List sx={{ marginBottom: '16px' }}>
          {messages.map((message, i) => (
            <ListItem
              key={i}
              alignItems="flex-start"
              sx={{
                '&.member': {
                  flexDirection: 'row-reverse',
                  textAlign: 'right',
                },
              }}
              className={message.senderType === 'MEMBER' ? 'member' : ''}
            >
              <ChatBubble message={message} />
            </ListItem>
          ))}
          <div ref={chatEndRef} />
        </List>
      </Box>
      <form onSubmit={handleMessageSend}>
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            padding: '8px',
            marginBottom: '16px',
            position: 'sticky',
            bottom: '0',
          }}
        >
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            sx={{ flexGrow: 1, mr: 1 }}
            fullWidth
          />
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};

export default Chat;
