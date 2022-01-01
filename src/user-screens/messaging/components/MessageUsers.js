import { Avatar, Box, HStack } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";
import Active from "../../../utility/Active";

export default function MessageUsers() {
    const users = [
        {
            _id: "1",
            avatar: "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: true,
        },
        {
            _id: "2",
            avatar: "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: true,
        },
        {
            _id: "3",
            avatar: "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: true,
        },
        {
            _id: "4",
            avatar: "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: true,
        },
        {
            _id: "5",
            avatar: "https://img.freepik.com/free-vector/cute-lion-with-console-game-icon-cartoon-vector-illustration_60438-1385.jpg?size=338&ext=jpg",
            isActive: true,
        },
    ];

    const modifiedUsers = [{ key: "plus", icon: "plus" }, ...users];

    return (
        <HStack p={4} space="3" alignItems={"center"}>
            {modifiedUsers.map((user) => (
                <Box
                    key={user._id || user.key}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={50}
                    borderWidth={2}
                    borderColor={"#11181C"}
                    borderStyle={"dashed"}
                    p={1}
                    position={"relative"}
                >
                    <Avatar
                        bg={"#BFBFBF"}
                        source={
                            user.avatar && {
                                uri: user.avatar,
                            }
                        }
                        size={"16"}
                    >
                        <Icon name={"plus"} size={26} color={"#fff"} />
                    </Avatar>
                    {user.isActive && (
                        <Active  right={0} bottom={0} />
                    )}
                </Box>
            ))}
        </HStack>
    );
}
