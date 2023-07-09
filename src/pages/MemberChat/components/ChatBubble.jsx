import { Typography, Box, Avatar } from '@mui/material';

export const ChatBubble = ({ message }) => {
  const { content, senderType, createdAt } = message;

  const convertToLocalTime = (timeString) => {
    const createdAtTimestamp = parseInt(timeString);
    const createdAtDate = new Date(createdAtTimestamp);
    return createdAtDate.toLocaleString();
  };

  const bubbleBackgroundColor =
    senderType === 'MEMBER' ? 'secondary.light' : 'primary.light';

  return (
    <Box
      display="flex"
      flexDirection={senderType === 'MEMBER' ? 'row-reverse' : 'row'}
      alignItems="center"
    >
      <Avatar
        sx={{
          bgcolor: bubbleBackgroundColor,
          mr: senderType === 'MEMBER' ? 0 : 2,
          ml: senderType === 'USER' ? 0 : 2,
        }}
      >
        {senderType === 'MEMBER' ? 'M' : 'U'}
      </Avatar>
      <Box
        sx={{
          borderRadius: '10px',
          padding: '8px 12px',
          backgroundColor: bubbleBackgroundColor,
        }}
      >
        <Typography>{content}</Typography>
        <Typography>{convertToLocalTime(createdAt)}</Typography>
      </Box>
    </Box>
  );
};
