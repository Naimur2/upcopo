import { HStack, Image, Modal, Stack,Box,Pressable } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Icon from "../../../../utility/Icon";
const imgScan = require("../../../../../assets/images/image-scanning.png");
const imgScanUri = RnImage.resolveAssetSource(imgScan).uri;

export default function ScanFace({ isOPen, onClose,onSuccess,...rest }) {
    return (
        <Modal isOpen={isOPen} onClose={onClose} {...rest}>
            <Modal.Content bg={"#fff"} w={["80%", "70%"]} maxWidth="600px">
                <Modal.Body>
                    <Stack position={"relative"}>
                        <Stack >
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
                            <HStack justifyContent={'center'}>
                                <Pressable onPress={onSuccess}  w="40" h="40">
                                    <Image
                                        alt={"QR code"}
                                        source={{ uri: imgScanUri }}
                                        w={"full"}
                                        h={"full"}
                                    />
                                </Pressable>
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
                    </Stack>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
