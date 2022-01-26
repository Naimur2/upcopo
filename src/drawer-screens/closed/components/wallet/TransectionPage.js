import { Box, Center, Image, Modal } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";
import Card from "../../../../utility/Card";
const imgScan = require("../../../../../assets/images/wallet.png");
const wallet = RnImage.resolveAssetSource(imgScan).uri;

export default function TransectionPage({ isOPen, onClose, ...rest }) {
    const {width}=Dimensions.get('window');

    return (
        <Modal isOpen={isOPen} onClose={onClose} {...rest}>
            <Modal.Content bg={"#F9F9F9"} w={"full"} maxWidth="600px">
                <Modal.Body>
                    <Card>
                        <Center>
                            <Box borderRadius={5} mt={2} mb={10} h={1.5} px="10" bg="#DFE3E6"/>
                            <Box w="70%" h="150" >
                                <Image
                                    alt={"QR code"}
                                    resizeMode="cover"
                                    source={{ uri: wallet }}
                                    h="full"
                                    w="full"
                                />
                            </Box>
                        </Center>
                    </Card>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
