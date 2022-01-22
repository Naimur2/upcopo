import { Box } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import FormInput from "../../utility/FormInput";





export default function MessageView() {

    const [messages, setMessages] = useState([]);
    console.log(messages);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello developer",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: "https://placeimg.com/140/140/any",
                },
            },
        ]);
    }, []);

    const onSend = useCallback((msz = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, msz)
        );
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={(msz) => onSend(msz)}
            textInputStyle={{ padding: 10 }}
            renderInputToolbar={(props) => {
                return (
                    <Box>
                        <FormInput pb={4} {...props} mb={40} />
                    </Box>
                );
            }}
            user={{
                _id: 1,
            }}
        />
    );
}
