import { Box } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function MessageView() {
  const [messages, setMessages] = useState([]);
console.log(messages)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((msz = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msz))
  }, [])

  return (
    <Box flex="1">
        <GiftedChat
          messages={messages}
          onSend={msz => onSend(msz)}
          user={{
            _id: 1,
          }}
        />
    </Box>
  )
}