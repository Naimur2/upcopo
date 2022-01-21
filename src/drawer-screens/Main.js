import { HStack, Text } from "native-base";
import React, { useState } from "react";
import Icon from "../utility/Icon";
import KeyBoardView from "../utility/KeyBoardView";
import ClosedView from "./closed/ClosedView";
import OpenView from "./open/OpenView";

export default function Main() {
    const [expanded, setExpanded] = useState(true);

    return (
        <KeyBoardView>
            <HStack
                bg={"#52B69A"}
                alignItems="center"
                justifyContent="space-between"
                py={4}
                px={4}
            >
                <Text
                    fontSize={18}
                    fontFamily={"body"}
                    fontWeight={600}
                    color={"#fff"}
                >
                    {!expanded ? "Edit Profile" : ""}
                </Text>
                <Icon
                    onPress={() => setExpanded((prev) => !prev)}
                    name={!expanded ? "x" : "edit"}
                    color={"#FFFFFF"}
                    size={!expanded ? 24 : 20}
                    alignSelf="flex-end"
                />
            </HStack>
            <ClosedView isOpen={expanded} />
            <OpenView isOpen={!expanded} />

        </KeyBoardView>
    );
}

