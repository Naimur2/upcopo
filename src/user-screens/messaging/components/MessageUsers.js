import { Avatar, Box, HStack } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

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
        <HStack
            p={4}
            space="3"
            alignItems={"center"}
          
        >
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
                    overflow={"hidden"}
                    position={'relative'}
                >
                    {user.key && user.icon ? (
                        <Icon
                            bg={"#BFBFBF"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            w={16}
                            h={16}
                            borderRadius={50}
                            p="2"
                            name={"plus"}
                            size={30}
                            color={"#fff"}
                        />
                    ) : (
                        <Avatar
                            source={{
                                uri: user.avatar,
                            }}
                            size={"16"}
                        />
                    )}
                </Box>
            ))}
        </HStack>
    );
}
