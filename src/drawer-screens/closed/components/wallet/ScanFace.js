import { Box, HStack, Image, Stack, Modal } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../../../utility/Card";
import Icon from "../../../../utility/Icon";
const imgScan = require("../../../../../assets/images/image-scanning.png");
const imgScanUri = RnImage.resolveAssetSource(imgScan).uri;

export default function ScanFace({isOPen,onClose}) {
    return (
            <Modal isOpen={isOPen} onClose={onClose}>
                <Modal.Content bg={"#fff"} w={["80%", "70%"]} maxWidth="600px">
                    <Modal.Body>
                        <Stack position={"relative"}>
                            <Stack space={40}>
                                <HStack justifyContent={"space-between"}>
                                    <Icon
                                        name="face-lock"
                                        size={20}
                                        color={"#C1C8CD"}
                                    />
                                    <Icon
                                        name="face-lock"
                                        size={20}
                                        color={"#C1C8CD"}
                                        transform={[{ rotate: "90deg" }]}
                                    />
                                </HStack>
                                <HStack justifyContent={"space-between"}>
                                    <Icon
                                        name="face-lock"
                                        size={20}
                                        color={"#C1C8CD"}
                                        transform={[{ rotate: "270deg" }]}
                                    />
                                    <Icon
                                        name="face-lock"
                                        size={20}
                                        color={"#C1C8CD"}
                                        transform={[{ rotate: "180deg" }]}
                                    />
                                </HStack>
                            </Stack>
                            <Box
                                h={40}
                                w={40}
                                position={"absolute"}
                                left={0}
                                right={0}
                                ml="auto"
                                mr="auto"
                            >
                                <Image
                                    alt={"QR code"}
                                    source={{ uri: imgScanUri }}
                                    w={"full"}
                                    h={"full"}
                                />
                            </Box>
                        </Stack>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
    );
}
