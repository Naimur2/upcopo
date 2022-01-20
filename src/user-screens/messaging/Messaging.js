import { FlatList, Stack } from "native-base";
import React from "react";
import Search from "../../utility/Search";
import MessagingBody from "./components/MessagingBody";

export default function Messaging() {
    const messages = [
        {
            _id: "01",
            from: {
                _id: "100",
                username: "Jrny club",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: true,
            },
            to: {
                _id: "200",
                username: "Crypto punks",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: false,
            },
            message: "Welcome Home",
            date: "January 18,2022,18:22:22",
            timestamp: "1642579204802",
        },
        {
            _id: "02",
            from: {
                _id: "100",
                username: "Jrny club",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: true,
            },
            to: {
                _id: "200",
                username: "Crypto punks",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: false,
            },
            message: "Hello World",
            date: "January 18,2022,18:22:22",
            timestamp: "1642610122256",
        },
        {
            _id: "03",
            from: {
                _id: "300",
                username: "Jrny club",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: true,
            },
            to: {
                _id: "100",
                username: "Crypto punks",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: false,
            },
            message: "Hey, Jol, If yo’re free now we can..",
            date: "January 18,2022,18:22:22",
            timestamp: "1642610338558",
        },
        {
            _id: "04",
            from: {
                _id: "300",
                username: "Jrny club",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: true,
            },
            to: {
                _id: "100",
                username: "Crypto punks",
                avatarUrl:
                    "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                isActive: true,
                seen: true,
            },
            message: "Hello World",
            date: "January 18,2022,18:22:22",
            timestamp: "1642610338558",
        },
    ];

    const currentUserid = "100";
    // get all users from all mesages
    const users = messages.map((mszs) => {
        if (mszs.from._id === currentUserid) return mszs.to;
        if (mszs.to._id === currentUserid) return mszs.from;
    });

    // remove duplicates id
    const peoplesId = [...new Set(users.map((a) => a._id))];

    // get all single user Details
    const peoples = peoplesId.map((p) => users.filter((u) => u._id === p));

    const renderItem = ({ item }) => {
        const lastSentMessage = messages.filter(
            (mcc) => mcc.to._id == item[0]._id
        );
        const lastReceivedMessage = messages.filter(
            (mcc) => mcc.from._id == item[0]._id
        );
        const unReadMessages = lastReceivedMessage.filter(lsr=>lsr.to.seen===false).length;
        const allMesage = [...lastReceivedMessage, ...lastSentMessage].sort(
            (x, y) => y.timestamp * 1 - x.timestamp * 1
        );

        // fetch isActive from server


        return (
            <MessagingBody
                key={item[0]._id}
                username={item[0].username}
                avatarUrl={item[0].avatarUrl}
                isActive={item[0].isActive}
                lastMessage={allMesage[0].message}
                lastMessageTime={'11:10pm'}
                numberofUnreadMessage={unReadMessages}
            />
        );
    };

    return (
        <Stack p={4}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<Search placeholder="Search in Messages" mb={4} />}
                data={peoples}
                renderItem={renderItem}
                h={'full'}
                keyExtractor={(item) => item[0]._id}
            />
        </Stack>
    );
}
