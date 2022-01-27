import { HStack, Stack, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import IconWithText from "../../../utility/IconWithText";
import ImageView from "../../../utility/ImageView";
import Like from "../../common/Like";

export default function ResultsCard({
    imgUrl,
    houseName,
    address1,
    onPress,
    price,
    isLiked,
    onLike,
}) {
    return (
        <Card onPress={onPress} borderRadius={20} mb="4" p={4}>
            <Stack>
                <ImageView
                    h={160}
                    borderRadius={15}
                    my={2}
                    imageUrl={imgUrl}
                    mb={4}
                >
                    <VStack py="4" px={3} space="16">
                        <Like
                            isLiked={isLiked}
                            onLike={onLike}
                            alignSelf="flex-end"
                        />
                        <Text
                            fontFamily={"body"}
                            fontWeight={600}
                            fontSize={16}
                            color={"#fff"}
                            alignSelf={"flex-start"}
                        >
                            {houseName}
                        </Text>
                    </VStack>
                </ImageView>

                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <VStack>
                        <IconWithText
                            iconName={"map"}
                            text={address1}
                            m
                            iconColor={"#889096"}
                            iconStyle={{
                                py: 0,
                                alignSelf: "flex-start",
                            }}
                            textColor={"#687076"}
                            textStyle={{
                                fontWeight: 500,
                                fontSize: 12,
                                maxW: "90%",
                            }}
                        />
                    </VStack>
                    <Text
                        fontFamily={"body"}
                        fontWeight={600}
                        fontSize={16}
                        color={"#11181C"}
                        pl={6}
                    >
                        ETH {price}
                    </Text>
                </HStack>
            </Stack>
        </Card>
    );
}
