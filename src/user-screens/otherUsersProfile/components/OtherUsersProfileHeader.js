import { Avatar, Box, HStack, Text, VStack } from "native-base";
import React from "react";
import UtilityBtn from "../../../utility/UtilityBtn";

export default function OtherUsersProfileHeader({
    avatar,
    userName,
    numberOfPosts,
    numberOfFOllowers,
    numberOfFOllowing,
    intro,
}) {
    const UserAvatar = ({ avatarUrl }) => (
        <Box>
            <Avatar
                size={24}
                position={"relative"}
                source={{ uri: avatarUrl }}
            />
            {/* <Varified size={10} position={"absolute"} bottom={0} right={0} /> */}
        </Box>
    );

    const UserSocial = ({ title, subtitle }) => (
        <VStack>
            <Text
                fontFamily={"body"}
                fontWeight={700}
                fontSize={18}
                color={"#11181C"}
            >
                {title}
            </Text>
            <Text
                fontFamily={"body"}
                fontWeight={500}
                fontSize={16}
                color={"#889096"}
            >
                {subtitle}
            </Text>
        </VStack>
    );

    return (
        <VStack px={4}>
            <HStack space="4" mt={8}>
                <VStack>
                    <UserAvatar avatarUrl={avatar} />
                </VStack>
                <VStack w={"70%"}>
                    <Text
                        fontFamily={"body"}
                        fontWeight={600}
                        fontSize={20}
                        color={"#11181C"}
                    >
                        {userName}
                    </Text>
                    <HStack justifyContent={"space-between"} mt={2}>
                        <UserSocial title={numberOfPosts} subtitle={"Posts"} />
                        <UserSocial
                            title={numberOfFOllowers}
                            subtitle={"Followers"}
                        />
                        <UserSocial
                            title={numberOfFOllowing}
                            subtitle={"Following"}
                        />
                    </HStack>
                    <VStack mt={2}>
                        <Text
                            fontFamily={"body"}
                            fontWeight={400}
                            fontSize={13}
                            color={"#7E868C"}
                        >
                            {intro}
                        </Text>
                    </VStack>
                </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} mt={4}>
                <Box w="1/3" px="1">
                    <UtilityBtn
                        title={"Follow"}
                        varient="blue"
                        py="2.5"
                        titleStyle={{
                            fontWeight: "500",
                            fontSize: "16",
                        }}
                    />
                </Box>
                <Box w="1/3" px="1">
                    <UtilityBtn
                        title={"Messege"}
                        varient="outlined"
                        py="2.5"
                        titleStyle={{
                            fontWeight: "500",
                            fontSize: "16",
                        }}
                    />
                </Box>
                <Box w="1/3" px="1">
                    <UtilityBtn
                        title={"Edit"}
                        varient="outlined"
                        py="2.5"
                        titleStyle={{
                            fontWeight: "500",
                            fontSize: "16",
                        }}
                    />
                </Box>
            </HStack>
        </VStack>
    );
}
