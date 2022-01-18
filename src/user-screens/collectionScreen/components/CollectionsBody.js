import { HStack, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";

export default function CollectionsBody() {
    return (
        <VStack>
            <Text
                fontFamily={"body"}
                fontWeight={700}
                fontSize={16}
                color={"#3D454A"}
                pt={4}
            >
                Boston Club
            </Text>
            <HStack space={2} alignItems={"center"} py={4}>
                <Text
                    fontFamily={"body"}
                    fontWeight={400}
                    fontSize={14}
                    color={"#3D454A"}
                >
                    0xet54trwQR5e5c757007....
                </Text>
                <Icon name={"copy"} size={20} color={"#000"} />
            </HStack>
            <Text
                fontFamily={"body"}
                fontWeight={400}
                fontSize={14}
                color={"#687076"}
            >
                Sometimes in life we have to just go with the vibe. Enjoy the
                unbothered moments in life to create in your space...
            </Text>
        </VStack>
    );
}
