import { Accordion, HStack, Text } from "native-base";
import React from "react";

export default function AccordionComponent({ title, component }) {
    const headerTextStyle = {
        color: "#11181C",
        fontFamily: "body",
        fontWeight: 500,
        fontSize: 17,
    };
    return (
        <Accordion bg="#fff" borderWidth={0}>
            <Accordion.Item>
                <Accordion.Summary
                    _expanded={{ bg: "#fff", _text: headerTextStyle }}
                    _text={headerTextStyle}
                    bgColor="#fff"
                    w={"full"}
                    justifyContent="space-between"
                >
                    <HStack>
                        <Text w="90%" {...headerTextStyle} flexWrap={"wrap"}>
                            {title}
                        </Text>
                        <Accordion.Icon
                            w={"10%"}
                            color={"#11181C"}
                            alignSelf={"flex-start"}
                        />
                    </HStack>
                </Accordion.Summary>
                <Accordion.Details _text={{ color: "#3D454A" }} borderWidth={0}>
                    {component}
                </Accordion.Details>
            </Accordion.Item>
        </Accordion>
    );
}
