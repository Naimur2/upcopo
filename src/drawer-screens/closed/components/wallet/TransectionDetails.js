import { Box, Center, HStack, Stack, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../../utility/Card";
import Icon from "../../../../utility/Icon";

export default function TransectionDetails({ transectionDetailsData, toggleTransection }) {
    const TransectionHistory = ({ _id, type, price, date, succeed }) => {
        return (
            <VStack space={4} pt={4} key={_id}>
                <HStack justifyContent={"space-between"}>
                    <Text
                        color={"#3D454A"}
                        fontFamily={"body"}
                        fontWeight={500}
                        fontSize={17}
                    >
                        {type}
                    </Text>
                    <Text
                        color={"#3D454A"}
                        fontFamily={"body"}
                        fontWeight={500}
                        fontSize={14}
                    >
                        -${price}
                    </Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                    <Text
                        color={"#889096"}
                        fontFamily={"body"}
                        fontWeight={500}
                        fontSize={14}
                    >
                        {date}
                    </Text>
                    {succeed ? (
                        <Text
                            color={"#52B69A"}
                            fontFamily={"body"}
                            fontWeight={500}
                            fontSize={14}
                        >
                            Success
                        </Text>
                    ) : (
                        <Text
                            color={"#DC3B3B"}
                            fontFamily={"body"}
                            fontWeight={500}
                            fontSize={14}
                        >
                            Failed
                        </Text>
                    )}
                </HStack>
                <Box borderColor={"#F1F3F5"} borderWidth={1} />
            </VStack>
        );
    };

    return (
        <Stack>
            <Card>
                <Center>
                    <Box
                        borderRadius={5}
                        mt={2}
                        h={1.5}
                        px="10"
                        bg="#DFE3E6"
                    />
                </Center>
                <HStack justifyContent={"flex-end"}>
                    <Icon onPress={toggleTransection} name="x" color={"#7E868C"} size={20} />
                </HStack>
                {transectionDetailsData.map((data) => (
                    <TransectionHistory
                        _id={data._id}
                        type={data.type}
                        date={data.date}
                        succeed={data.succeed}
                        price={data.price}
                        key={data._id}
                    />
                ))}
            </Card>
        </Stack>
    );
}
