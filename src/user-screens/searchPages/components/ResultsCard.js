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
    address2,
    price,
}) {
    return (
        <Stack>
            <Card borderRadius={20} mb="4"  p={4}>
                <Stack>
                    <ImageView
                        h={160}
                        borderRadius={15}
                        my={2}
                        imageUrl={imgUrl}
                    >
                        <VStack py="4" px={3}  space='16'>
                            <Like alignSelf="flex-end" />
                            <Text
                                fontFamily={"body"}
                                fontWeight={600}
                                fontSize={16}
                                color={"#fff"}
                                alignSelf={'flex-start'}
                            >
                                {houseName}
                            </Text>
                        </VStack>
                    </ImageView>

                    <HStack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <VStack>
                            <IconWithText
                                iconName={"map"}
                                text={address1}
                                iconColor={"#889096"}
                                textColor={"#687076"}
                                textStyle={{
                                    fontWeight: 500,
                                    fontSize: 12,
                                }}
                            />
                            <Text
                                fontFamily={"body"}
                                fontWeight={500}
                                fontSize={12}
                                color={"#687076"}
                                pl={6}
                            >
                                {address2}
                            </Text>
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
        </Stack>
    );
}
