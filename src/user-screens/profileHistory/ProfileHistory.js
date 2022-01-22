import { Box, FlatList, HStack, Image, Text, VStack } from "native-base";
import React from "react";

export default function ProfileHistory() {
    const profileHistoryData = [
        {
            _id: "1",
            imgUrl: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=338&ext=jpg",
            title: "Pay in a house",
            subtitle: `When you make payment of $5 or more when you pay at local...`,
            time: "11:00AM",
        },
        {
            _id: "2",
            imgUrl: "https://image.freepik.com/free-photo/real-estate-with-house-model-keys_1150-17814.jpg",
            title: `$5 turn key house`,
            subtitle: `When you make payment of $5 or more when you pay at local..`,
            time: "09:14AM",
        },
        {
            _id: "3",
            imgUrl: "https://image.freepik.com/free-vector/suburban-house-with-sign-sale_107791-6223.jpg",
            title: "Cashback 5% on house ",
            subtitle: `When you make payment of $5 or more when you pay at local..`,
            time: "11:00AM",
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <HStack pt={4} px={4} justifyContent="space-between" >
                <Box  w={[60,72]} h={[60,72]} borderRadius={10} overflow="hidden">
                    <Image
                        alt="img11"
                        source={{ uri: item.imgUrl }}
                        w={"full"}
                        h={"full"}
                    />
                </Box>

                <HStack w={"65%"} ml={2}>
                    <VStack space={2}>
                        <Text
                            fontFamily={"body"}
                            fontWeight={"600"}
                            color={"#11181C"}
                            fontSize={"16"}
                        >
                            {item.title}
                        </Text>
                        <Text
                            fontFamily={"body"}
                            fontWeight={"400"}
                            color={"#687076"}
                            fontSize={"13"}
                        >
                            {item.subtitle}
                        </Text>
                    </VStack>
                </HStack>
                <Text
                    fontFamily={"body"}
                    fontWeight={"400"}
                    color={"#687076"}
                    fontSize={"13"}
                    w="20%"
                >
                    {item.time}
                </Text>
            </HStack>
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={profileHistoryData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
