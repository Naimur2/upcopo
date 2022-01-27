import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import { FlatList, Stack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearPeoples, getPeoples
} from "../../../store/slices/messagesSlice";
import MessagingBody from "./components/MessagingBody";
import SearchMessage from "./components/SearchMessage";

export default function Messaging() {
    const [text, setText] = React.useState("");
    let [search, setSearch] = React.useState("");
    const navigation = useNavigation();
    const peoples = useSelector((state) => state.messages.peoples);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPeoples());
        return () => {
            dispatch(clearPeoples());
        };
    }, []);

    const onSearchHandler = debounce((tc) => {
        setSearch(tc);
    }, 500);
    React.useEffect(() => {
        onSearchHandler(text);
        return () => {

            setSearch("");
        };
    }, [text]);
    const filterSearch = peoples.filter((item) =>
        search !== ""
            ? item.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            : item
    );

    const renderItem = ({ item }) => {
        return (
            <MessagingBody
                key={item._id}
                onPress={() =>
                    navigation.navigate("MessageScreenView", {
                        user: item,
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
                    <SearchMessage 
                    value={text}
                    onSearch={(text) => setText(text)}
                    onClear={() => setSearch("")}
                    />
                }
                data={filterSearch}
                renderItem={renderItem}
                h={"full"}
                keyExtractor={(item) => item._id}
            />
        </Stack>
    );
}
