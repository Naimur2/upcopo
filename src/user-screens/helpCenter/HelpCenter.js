import { Stack, Text, VStack } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import AccordionComponent from "../../utility/AccordionComponent";
import IconWithText from "../../utility/IconWithText";

export default function () {
    const contents = [
        {
            _id: "01",
            title: "How to bid new house",
            content: (
                <Text color={"#3D454A"} fontFamily={"body"} fontSize={14}>
                    Real estate salespeople and other licensees who are required
                    to work for and under the umbrella of a designated broker
                    are often referred to as real estate agents.
                </Text>
            ),
        },
        {
            _id: "02",
            title: "Contact Information",
            content: (
                <VStack space={2}>
                    <IconWithText
                        iconName={"location"}
                        text="6363 Richmond Avenue #511 Houston, TX 77057"
                    />
                    <IconWithText
                        iconName={"telephone"}
                        text="(713) 785-7777"
                    />
                    <IconWithText
                        iconName={"envelope"}
                        text="service@upcopohelpcenters.com"
                    />
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
            <Stack alignItems={'center'} bg={'#52B69A'} p={4}>
                <Text fontWeight={500} fontFamily={'body'} fontSize={20} textAlign={'center'}>We're here to help!</Text>
            </Stack>
            <Stack space={4} p={4} h="full">
                {contents.map((content) => (
                    <AccordionComponent
                        key={content._id}
                        title={content.title}
                        component={content.content}
                    />
                ))}
            </Stack>
        </ScrollView>
    );
}
