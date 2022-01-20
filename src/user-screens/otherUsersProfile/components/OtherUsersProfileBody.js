import { Avatar, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";

export default function OtherUsersProfileBody() {
    const OtherUsersProfileBodyData = [
        {
            _id: "1",
            avater: "https://pbs.twimg.com/profile_images/1456285928067145728/4wiT4k6S_400x400.jpg",
            userName: "Jole Norris",
        },
        {
            _id: "2",
            avater: "https://image.freepik.com/free-vector/cartoon-panda-eating-bamboo_29190-797.jpg",
            userName: "Jrny club",
        },
        {
            _id: "3",
            avater: "https://image.freepik.com/free-vector/cute-cartoon-panda-with-cap-glasses-vector-illustration_60438-1432.jpg",
            userName: "Feudalz",
        },
        {
            _id: "4",
            avater: "https://image.freepik.com/free-vector/cute-panda-reading-book-cartoon-icon-illustration_138676-2683.jpg",
            userName: "Noundles",
        },
        {
            _id: "5",
            avater: "https://image.freepik.com/free-vector/cartoon-funny-panda-holding-bamboo_29190-6255.jpg",
            userName: "Jole Norris",
        },
        {
            _id: "6",
            avater: "https://image.freepik.com/free-vector/cartoon-panda-eating-bamboo_29190-797.jpg",
            userName: "Jrny club",
        },
    ];

    const Messanger = () => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={6} px={4}>
                {OtherUsersProfileBodyData.map((data) => (
                    <VStack
                        space={2}
                        alignItems={"center"}
                        key={data._id}
                        justifyContent={"center"}
                    >
                        <Avatar size={"lg"} source={{ uri: data.avater }} />
                        <Text
                            fontFamily={"body"}
                            fontWeight={500}
                            fontSize={16}
                            color={"#000"}
                        >
                            {data.userName}
                        </Text>
                    </VStack>
                ))}
            </HStack>
        </ScrollView>
    );

    return (
        <VStack py={4}>
            <Card mx={4} p={4} mt={4}>
                <HStack justifyContent={"space-between"}>
                    <Icon name={"menu"} size={22} color={"#11221C"} />
                    <Icon name={"activity"} size={22} color={"#889096"} />
                    <Icon name={"tag"} size={22} color={"#889096"} />
                </HStack>
            </Card>
        </VStack>
    );
}
