import { useNavigation } from "@react-navigation/native";
import { FlatList, Stack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearMessages,
    clearPeoples,
    getMessages,
    getPeoples,
} from "../../../store/slices/messagesSlice";
import Search from "../../utility/Search";
import MessagingBody from "./components/MessagingBody";

export default function Messaging() {
    const navigation = useNavigation();
    const peoples = useSelector((state) => state.messages.peoples);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPeoples());
        return () => {
            dispatch(clearPeoples());
        };
    }, []);

    const renderItem = ({ item }) => {
        return (
            <MessagingBody
                key={item._id}
                onPress={() =>
                    navigation.navigate("MessageScreenView", {
                        userId: item.sentId,
                    })
                }
                username={item.name}
                avatarUrl={item.avatar}
                isActive={item.isActive}
                lastMessage={item.lastMesage}
                lastMessageTime={item.time}
                numberofUnreadMessage={item.lastMesage}
            />
        );
    };

    return (
        <Stack p={4}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <Search placeholder="Search in Messages" mb={4} />
                }
                data={peoples}
                renderItem={renderItem}
                h={"full"}
                keyExtractor={(item) => item._id}
            />
        </Stack>
    );
}
