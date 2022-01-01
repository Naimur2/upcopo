import { FlatList, ScrollView } from "native-base";
import React from "react";
//import Icon from '../../utility/Icon';
import MessagingBody from "../../user-screens/messaging/MessagingBody";

export default function Messaging() {
    const messageBodyData = [
        {
            _id: "1",
            username: "Joel Noris",
            avaterUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: false,
            lastMessageText: "Call ended",
            lastMessageTime: "11.14AM",
            countUnreadedMessages: "0",
        },
        {
            _id: "2",
            username: "Joel Noris",
            avaterUrl:
                "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: false,
            lastMessageText: "Hey Jol, if you're free now we can..",
            lastMessageTime: "09.14AM",
            countUnreadedMessages: "3",
        },
        {
            _id: "3",
            username: "Crypto punks",
            avaterUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            lastMessageText: "Yeah, can i call you back later",
            lastMessageTime: "11.14AM",
            countUnreadedMessages: "0",
        },
        {
            _id: "4",
            username: "Jrny club",
            avaterUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: false,
            lastMessageText: "Hey Jol, If you're free now we can..",
            lastMessageTime: "09.14AM",
            countUnreadedMessages: "3",
        },
    ];
    const renderItem = ({ item }) => {
        return (
            <MessagingBody
                username={item.username}
                avaterUrl={item.avaterUrl}
                lastMessageText={item.lastMessageText}
                lastMessageTime={item.lastMessageTime}
                countUnreadedMessages={item.countUnreadedMessages}
            />
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={messageBodyData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
