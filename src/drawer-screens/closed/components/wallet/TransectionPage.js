import { Box, Center, Image, Modal, VStack,Text } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../../../utility/Card";
const imgScan = require("../../../../../assets/images/wallet.png");
const wallet = RnImage.resolveAssetSource(imgScan).uri;

export default function TransectionPage({ isOPen, onClose, ...rest }) {
    const [showView1,setShowView1] =React.useState(true);

    const ViewOne = () => (
        <VStack>
            <Card>
                <Center>
                    <Box
                        borderRadius={5}
                        mt={2}
                        mb={10}
                        h={1.5}
                        px="10"
                        bg="#DFE3E6"
                    />
                    <Box w="70%" h="150">
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
            <Text onPress={()=> setShowView1(false)} color="dark.200">Toggle</Text>
        </VStack>
    );
    
    const ViewTwo = () => (
        <VStack>
            <Card>
                <Center>
                    <Box
                        borderRadius={5}
                        mt={2}
                        mb={10}
                        h={1.5}
                        px="10"
                        bg="#DFE3E6"
                    />
                    <Box w="70%" h="150">
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
            <Text onPress={()=> setShowView1(true)} color="dark.200">Close</Text>
        </VStack>
    );

    return (
        <Modal isOpen={isOPen} onClose={onClose} {...rest}>
            <Modal.Content bg={"#F9F9F9"} w={"full"} maxWidth="600px">
                <Modal.Body>
                   {showView1 ? <ViewOne /> :<ViewTwo />}
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
