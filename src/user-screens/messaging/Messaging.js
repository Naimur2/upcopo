import { FlatList, ScrollView } from "native-base";
import React from "react";
import MessageUsers from "./components/MessageUsers";
//import Icon from '../../utility/Icon';
import MessagingBody from "./components/MessagingBody";

export default function Messaging() {
    const date = "Dec 31, 2021, 18:31:30";
    const messageBodyData = [
        {
            _id: "1",
            username: "Joel Noris",
            avaterUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: false,
            messages: "Call ended",
            lastMessageTime: date,
            unreadMessages: "0",
            callEnded: false,
            missedCall: false,
        },
        {
            _id: "2",
            username: "Joel Noris",
            avaterUrl:
                "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: false,
            messages: [
                {
                    from: [{ username: "hfdfgfg", email: "emai@gg.cc" }],
                    to: [{ username: "hfdfgfg", email: "emai@gg.cc" }],
                    messageBody: "Hi there",
                    timesmap: "Jan ",
                },
            ],
            lastMessageTime: date,
            unreadMessages: "3",
            callEnded: false,
            missedCall: false,
        },
        {
            _id: "3",
            username: "Crypto punks",
            avaterUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            messages: "Yeah, can i call you back later",
            lastMessageTime: date,
            unreadMessages: "0",
            callEnded: false,
            missedCall: false,
        },
        {
            _id: "4",
            username: "Jrny club",
            avaterUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: false,
            messages: "Hey Jol, If you're free now we can..",
            lastMessageTime: date,
            unreadMessages: "3",
            callEnded: false,
            missedCall: false,
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <MessagingBody
                username={item.username}
                avaterUrl={item.avaterUrl}
                lastMessage={item.lastMessage}
                lastMessageTime={item.lastMessageTime}
                unreadMessages={item.unreadMessages}
            />
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <MessageUsers  />
                </ScrollView>
            }
            data={messageBodyData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}


