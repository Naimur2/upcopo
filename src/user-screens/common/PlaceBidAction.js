import { Actionsheet, Box, Text } from "native-base";
import React from "react";
import KeyBoardView from "../../utility/KeyBoardView";

export default function PlaceBidAction({ isOpen, onOpen, onClose }) {
    return (
        <Actionsheet isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <Actionsheet.Content bg={"#ffff"}>
                <KeyBoardView>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                                color: "light.400",
                            }}
                        >
                            Albums
                        </Text>
                    </Box>
                </KeyBoardView>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
