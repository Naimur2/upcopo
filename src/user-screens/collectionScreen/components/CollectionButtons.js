import { Box, HStack, Text } from "native-base";
import React from "react";
import Card from "../../../utility/Card";

const CollectionsCard = ({ title, value,onPress }) => (
    <Card onPress={onPress} alignItems={"center"} w="full">
        <Text
            fontFamily={"body"}
            fontWeight={400}
            fontSize={14}
            color={"#687076"}
            textTransform="uppercase"
        >
            {title}
        </Text>
        <Text
            fontFamily={"body"}
            fontWeight={700}
            fontSize={24}
            textTransform="uppercase"
            color={"#11181C"}
        >
            {value}
        </Text>
    </Card>
);

export default function CollectionButtons({
    items,
    floorPrice,
    owners,
    volume,
    onItemKeyPress
}) {
    const cards = [
        {
            title: "Items",
            value: items,
            onPress:onItemKeyPress
        },
        {
            title: "Floor Price",
            value: floorPrice,
        },
        {
            title: "Owners",
            value: owners,
        },
        {
            title: "Volume traded",
            value: volume,
        },
    ];

    


    return (
        <HStack
            alignItems={"center"}
            justifyContent="center"
            flexWrap={"wrap"}
            mt={4}
            px={4}
        >
            {cards.map((item, id) => (
                <Box
                    w="50%"
                    pb={2}
                    pr={id % 2 === 0 ? 2 : 0}
                    pl={id % 2 !== 0 ? 2 : 0}
                    key={id.toString()}
                >
                    <CollectionsCard
                        key={id.toString()}
                        serial={id}
                        title={item.title}
                        value={item.value}
                        onPress={item.onPress}
                    />
                </Box>
            ))}
        </HStack>
    );
}
