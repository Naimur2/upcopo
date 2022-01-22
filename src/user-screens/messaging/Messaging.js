import { useNavigation } from "@react-navigation/native";
import { FlatList, Stack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessages, getMessages } from "../../../store/slices/messagesSlice";
import Search from "../../utility/Search";
import MessagingBody from "./components/MessagingBody";


export default function Messaging() {
  const navigation=useNavigation();
    const messages=useSelector(state=>state.messages.messages)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages());
        return ()=>{
            dispatch(clearMessages());
        }
    }, []);

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
                onPress={()=>navigation.navigate('MessageScreenView',{
                    userId:item[0]._id,
                })}
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
