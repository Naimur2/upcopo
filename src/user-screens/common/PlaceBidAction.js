import { Actionsheet, Box, Text } from "native-base";
import React from "react";
export default function PlaceBidAction({ isOpen, onOpen, onClose }) {
    return (
        <Actionsheet isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <Actionsheet.Content>
                <Box w="100%" h={60} px={4} justifyContent="center">
                    <Text
                        fontSize="16"
                        color="gray.500"
                        _dark={{
                            color: "gray.300",
                        }}
                    >
                        Albums
                    </Text>
                </Box>
                <Actionsheet.Item>Delete</Actionsheet.Item>
                <Actionsheet.Item>Share</Actionsheet.Item>
                <Actionsheet.Item>Play</Actionsheet.Item>
                <Actionsheet.Item>Favourite</Actionsheet.Item>
                <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
