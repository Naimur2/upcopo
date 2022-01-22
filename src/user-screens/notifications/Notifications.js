import {
    Avatar,
    Box,
    Divider,
    HStack,
    SectionList,
    Stack,
    Text
} from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../../store/slices/notificationsSlice";
import NoNewNotifications from "./NoNewNotifications";

export default function Notifications() {
    const notificationsState = useSelector(
        (state) => state.notifications.notifications
    );
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getNotifications());
    }, []);

    const NotifyCard = ({ notify }) => (
        <HStack p={1} justifyContent={"space-between"}>
            <Box w="20%">
                <Avatar size={"lg"} source={{ uri: notify.avatar }} />
            </Box>
            <HStack
                alignItems={"center"}
                w="78%"
                justifyContent={"space-between"}
                flexWrap="wrap"
            >
                <Text>
                    <Text
                        pr={1}
                        fontSize={16}
                        fontWeight={600}
                        fontFamily={"body"}
                        color={"#000"}
                    >
                        {notify.userName}{" "}
                    </Text>
                    <Text
                        fontSize={16}
                        fontWeight={400}
                        fontFamily={"body"}
                        color={"#687076"}
                    >
                        {notify.message}
                    </Text>
                </Text>

                <HStack ml={"auto"} justifyContent={"flex-end"}>
                    <Text
                        fontSize={16}
                        fontWeight={400}
                        fontFamily={"body"}
                        color={"#687076"}
                        alignSelf="flex-end"
                    >
                        {notify.timestap}
                    </Text>
                </HStack>
            </HStack>
        </HStack>
    );

    return (
        <Stack px={4} bg={"#FFFFFF"} flex="1">
            {notificationsState.length > 0 ? (
                <SectionList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    pb={4}
                    sections={notificationsState}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <NotifyCard notify={item} />}
                    renderSectionFooter={() => (
                        <Divider
                            thickness={2}
                            mb={4}
                            mt={2}
                            bgColor={"#E6E8EB"}
                        />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text
                            fontSize={18}
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#7E868C"}
                            py={2}
                        >
                            {title}
                        </Text>
                    )}
                />
            ) : (
                <NoNewNotifications />
            )}
        </Stack>
    );
}
