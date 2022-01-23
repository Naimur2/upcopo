import dayjs from "dayjs";
import { Box, HStack, Text, VStack } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import Icon from "../../utility/Icon";

export default function MessageView() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: "1",
                text: "Hello developer",
                createdAt: new Date(),
                // to
                user: {
                    _id: "2",
                    name: "React Native",
                    avatar: "https://placeimg.com/140/140/any",
                },
                // from
                from: {
                    _id: "2",
                    name: "React Native",
                    avatar: "https://placeimg.com/140/140/any",
                },
                seen:false,
            },
        ]);
    }, []);
    const renderInputToolbar = (props) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    backgroundColor: "white",
                    borderTopColor: "#E8E8E8",
                    borderTopWidth: 1,
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    alignItems: "center",
                }}
            />
        );
    };

    const renderMessage = (props) => {
        const { currentMessage } = props;
        const self = currentMessage.user._id === userid;
        let date = currentMessage.createdAt;
    
   
        date = dayjs(date).format("h:mm A").toString();
        return (
            <HStack
                py={1}
                px={4}
                justifyContent={self ? "flex-end" : "flex-start"}
            >
                <VStack maxW={"60%"}>
                    <Box
                        borderRadius={10}
                        px={4}
                        py="2"
                        bg={self ? "#52B69A" : "#E6E8EB"}
                        minW={40}
                    >
                        <Text
                            fontFamily={"body"}
                            fontWeight={400}
                            key={currentMessage._id}
                            color={self ? "#fff" : "#687076"}
                            textAlign="center"
                        >
                            {currentMessage.text}
                        </Text>
                    </Box>
                    <Text
                        fontFamily={"body"}
                        fontWeight={400}
                        textAlign={"center"}
                        color={"#889096"}
                    >
                        send at {date}
                    </Text>
                </VStack>
            </HStack>
        );
    };

   

    const onSend = useCallback((msz = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, msz)
        );
    }, []);

    const userid = "1";

    const validateMessage = (msz) => {
        if (msz[0].text.length > 0) onSend(msz);
        else return;
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={validateMessage}
            renderInputToolbar={renderInputToolbar}
            textInputStyle={{
                backgroundColor: "#F1F3F5",
                paddingVertical: 14,
                paddingHorizontal: 16,
                borderRadius: 10,
            }}
            renderSend={(props) => (
                <Box
                    h={"full"}
                    alignSelf={"center"}
                    px={4}
                    justifyContent="center"
                >
                    <Icon
                        color={"#fff"}
                        bg="#52B69A"
                        size={20}
                        py={3}
                        px={3}
                        borderRadius={10}
                        onPress={() => props.onSend({ text: props.text })}
                        name="send"
                        {...props}
                    />
                </Box>
            )}
            renderMessage={renderMessage}
            minInputToolbarHeight={80}
            infiniteScroll
            user={{
                _id: userid,
            }}
        />
    );
}
