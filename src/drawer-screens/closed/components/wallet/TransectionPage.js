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
                            <Box w="50%" h="200" >
                                <Image
                                    alt={"QR code"}
                                    source={{ uri: wallet }}
                                    style={{
                                        height:120,
                                        width:Math.round(width/2)
                                    }}
                                />
                            </Box>
                        </Center>
                    </Card>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
