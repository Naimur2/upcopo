import { HStack, Stack, Text, VStack } from "native-base";
import React, { useState } from "react";
import Icon from "../../utility/Icon";
import IconWithText from "../../utility/IconWithText";
import Search from "../../utility/Search";

export default function SearchScreen() {
    const [open, setOpen] = useState(false);

    return (
        <Stack p={4} space={6}>
            <VStack>
                <Text
                    fontSize={22}
                    fontWeight={600}
                    fontFamily={"body"}
                    color={"#11181C"}
                >
                    To reach their home
                </Text>
                <Text
                    fontSize={18}
                    fontWeight={400}
                    fontFamily={"body"}
                    color={"#687076"}
                >
                    Let’s find a home thst’s perfect for you
                </Text>
            </VStack>
            <Search />
            <VStack>
                <Text
                    fontSize={20}
                    fontWeight={600}
                    fontFamily={"body"}
                    color={"#11181C"}
                >
                    Recent Searches
                </Text>

                <HStack>
                    <VStack space="1">
                        <HStack
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Text
                                fontSize={18}
                                fontWeight={600}
                                fontFamily={"body"}
                                color={"#52B69A"}
                            >
                                House of secrest
                            </Text>
                            <Icon name="x" size={24} color={"#C1C8CD"} />
                        </HStack>
                        <IconWithText
                            iconName="map"
                            textStyle={{
                                fontSize: 15,
                            }}
                            iconStyle={{ py: 0.5 }}
                            containerStyle={{
                                maxW: "90%",
                                alignItems: "flex-start",
                            }}
                            text="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
                        />
                        <HStack space={6}>
                            <IconWithText
                                iconName="bed-filled"
                                textStyle={{
                                    fontSize: 16,
                                    color: "#687076",
                                    fontWeight:400,
                                }}
                                iconStyle={{size:20}}
                                text="3 Bed"
                            />
                            <IconWithText
                                iconName="bath-filled"
                                textStyle={{
                                    fontSize: 16,
                                    color: "#687076",
                                    fontWeight:400,
                                }}
                                iconStyle={{size:16}}
                                text="2 Bath"
                            />
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Stack>
    );
}
