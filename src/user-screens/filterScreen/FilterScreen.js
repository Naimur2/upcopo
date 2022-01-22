import { Box, HStack, Pressable, Stack, Text, VStack } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import AccordionComponent from "../../utility/AccordionComponent";
import SelectItem from "../../utility/SelectItem";
import UtilityBtn from "../../utility/UtilityBtn";

export default function FilterScreeen() {
    let [currency, setCurrency] = React.useState("usd");

    const SelectCategory = () => {
        const items = [
            { _id: "01", label: "United States Dollar ( USD )", value: "usd" },
            { _id: "02", label: "Australian Dollar ( AD )", value: "ad" },
            { _id: "03", label: "Euro", value: "eu" },
        ];
        return (
            <SelectItem
                placeholder={"United States Dollar ( USD )"}
                items={items}
                bg="#F1F3F5"
                selectedValue={currency}
                onValueChange={(value)=>setCurrency(value)} fontSize={16}
                fontWeight={500}
                fontFamily={"body"}
                color={"#3D454A"}
                pl={4}
            />
        );
    };

    const PressableItem = ({ title, onPress, ...rest }) => (
        <Pressable
            onPress={onPress}
            _pressed={{ bg: "#D6FFF0" }}
            borderRadius={10}
            py="2"
            bg="#F1F3F5"
            {...rest}
        >
            <Text
                textAlign={"center"}
                fontSize={16}
                fontWeight={500}
                fontFamily={"body"}
                color={"#3D454A"}
            >
                {title}
            </Text>
        </Pressable>
    );
    const contents = [
        {
            _id: "01",
            title: "Status",
            content: (
                <VStack space="2">
                    <HStack justifyContent={"space-between"}>
                        <PressableItem w="48%" title={"Buy Now"} />
                        <PressableItem w="48%" title={"On Auctions"} />
                    </HStack>

                    <HStack justifyContent={"space-between"}>
                        <PressableItem w="48%" title={"New"} />
                        <PressableItem w="48%" title={"Has Offers"} />
                    </HStack>
                </VStack>
            ),
        },
        {
            _id: "02",
            title: "Price",
            content: (
                <VStack space="4">
                    <HStack
                        w="full"
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <PressableItem w="40%" title={"Min"} />
                        <Box>
                            <Text
                                textAlign={"center"}
                                fontSize={16}
                                fontWeight={500}
                                fontFamily={"body"}
                                color={"#3D454A"}
                            >
                                to
                            </Text>
                        </Box>
                        <PressableItem w="40%" title={"Max"} />
                    </HStack>
                    <SelectCategory />
                    <HStack
                        w="full"
                        flexWrap={"wrap"}
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <Box w="60%" px={1} pb={2}>
                            <PressableItem
                                borderColor="#C1C8CD"
                                borderWidth={1}
                                bg="transparent"
                                title={"Apply"}
                            />
                        </Box>
                    </HStack>
                </VStack>
            ),
        },
        {
            _id: "03",
            title: "Present all purchase offers to sellers for consideration",
            content: (
                <Text color={"#3D454A"} fontFamily={"body"} fontSize={14}>
                    Real estate salespeople and other licensees who are required
                    to work for and under the umbrella of a designated broker
                    are often referred to as real estate agents.
                </Text>
            ),
        },
        {
            _id: "04",
            title: "First Time House Buyer",
            content: (
                <Text color={"#3D454A"} fontFamily={"body"} fontSize={14}>
                    Real estate salespeople and other licensees who are required
                    to work for and under the umbrella of a designated broker
                    are often referred to as real estate agents.
                </Text>
            ),
        },
    ];

    return (
        <ScrollView>
            <Stack space={4} p={4} h="full">
                {contents.map((content, index) => (
                    <AccordionComponent
                        key={content._id}
                        title={content.title}
                        component={content.content}
                        index={index < 2 ? [0] : null}
                        headerStyle={{ fontWeight: 600 }}
                        _expanded={{
                            borderBottomWidth: 2,
                            borderBottomColor: "#F1F3F5",
                        }}
                    />
                ))}
                <UtilityBtn mt={4} title={"Apply Filter"} />
            </Stack>
        </ScrollView>
    );
}
