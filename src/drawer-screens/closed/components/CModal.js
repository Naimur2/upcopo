import { Divider, HStack, Modal, Pressable, Stack, Text } from "native-base";
import React from "react";

export default function CModal({
    onCancel,
    onSuccess,
    isOPen,
    heading,
    subtitle,
    subtitleComponent,
}) {
    return (
        <Modal isOpen={isOPen} onClose={onCancel}>
            <Modal.Content bg={"#fff"} w={["80%", "70%"]} maxWidth="600px">
                <Modal.Body>
                    <Stack space={2} px={4}>
                        <Text
                            textAlign={"center"}
                            fontWeight={600}
                            fontFamily={"body"}
                            color="#11181C"
                            fontSize={16}
                        >
                            {heading}
                        </Text>
                        {subtitleComponent ? (
                            subtitleComponent
                        ) : (
                            <Text
                                textAlign={"center"}
                                fontWeight={400}
                                fontFamily={"body"}
                                color="#687076"
                                fontSize={14}
                            >
                                {subtitle}
                            </Text>
                        )}
                    </Stack>
                </Modal.Body>
                <Divider bg={"#E6E8EB"} />
                <Modal.Footer bg={"#fff"} p="0">
                    <HStack>
                        <Pressable onPress={onCancel} p="2" w="1/2">
                            <Text
                                textAlign={"center"}
                                fontWeight={500}
                                fontFamily={"body"}
                                color="#889096"
                                fontSize={16}
                            >
                                Cancel
                            </Text>
                        </Pressable>
                        <Pressable onPress={onSuccess} p="2" w="1/2">
                            <Text
                                textAlign={"center"}
                                fontWeight={500}
                                fontFamily={"body"}
                                color="#11181C"
                                fontSize={16}
                            >
                                Confirm
                            </Text>
                        </Pressable>
                    </HStack>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}
