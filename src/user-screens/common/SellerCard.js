import { HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Card from "../../utility/Card";
import Icon from "../../utility/Icon";
import { useNavigation } from "@react-navigation/native";

export default function SellerCard({
    id,
    username,
    avatar,
    varified,
    houseImage,
    houseDescription,
    price,
    ...rest
}) {
    const navigation = useNavigation();

    return (
        <Card
            onPress={() => navigation.navigate("UserProfile", { userId: id })}
            {...rest}
        >
            <VStack space="2">
                <HStack space="1.5" alignItems={"center"}>
                    <Image
                        borderRadius={50}
                        source={{ uri: avatar }}
                        alt={username}
                        h={8}
                        w={8}
                    />
                    <Text
                        fontFamily={"body"}
                        fontWeight={700}
                        color={"#3D454A"}
                    >
                        @{username}
                    </Text>
                    {varified && (
                        <Icon name={"varified"} size={24} color={"#76C893"} />
                    )}
                </HStack>
                <Image
                    borderRadius={12}
                    source={{ uri: houseImage }}
                    alt={username}
                    minH={160}
                    maxH={200}
                    w={"100%"}
                />
                <VStack space={1} mx={2}>
                    <Text fontWeight={500} color={"#687076"}>
                        {houseDescription}
                    </Text>
                    <HStack justifyContent={"space-between"}>
                        <Text
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#687076"}
                        >
                            Price
                        </Text>
                        <Text
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#3D454A"}
                        >
                            {price} ETH
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </Card>
    );
}
