import { Box, Center, HStack, Image, Modal, Pressable, Text, VStack } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../../../utility/Card";
import Icon from "../../../../utility/Icon";
import TransectionDetails from './TransectionDetails';

const imgScan = require("../../../../../assets/images/wallet.png");
const imgGem = require("../../../../../assets/images/fxemoji_gem.png");
const wallet = RnImage.resolveAssetSource(imgScan).uri;
const imgGemUri = RnImage.resolveAssetSource(imgGem).uri;

export default function TransectionPage({ isOPen, onClose, ...rest }) {
    const [showView1, setShowView1] = React.useState(true);

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
                    <HStack alignItems={'center'} space={2} pt={4}>
                        <Box
                            h={12}
                            w={12}
                            p={2}
                        >
                            <Image
                                alt="gem_icon"
                                h={"full"}
                                w={"full"}
                                source={{ uri: imgGemUri }}
                            />
                        </Box>
                        <Text color={'#3D454A'} fontFamily={'body'} fontWeight={600} fontSize={20}>
                            Gem Balance
                        </Text>
                        <Text color={'#11181C'} fontFamily={'body'} fontWeight={500} fontSize={24}>
                            0.05
                        </Text>
                    </HStack>
                    <Text color={'#889096'} fontFamily={'body'} fontWeight={500} fontSize={17}>
                        ( US  $5.00 )
                    </Text>

                    <Card bg={'#F2F8F6'} mt={4}>
                        <HStack space={2} py={2} px={8}>
                            <Icon name={'tick'} size={20} color={'#52B69A'} />
                            <Text color={'#52B69A'} fontFamily={'body'} fontWeight={600} fontSize={17}>
                                Successfully Transaction
                            </Text>
                        </HStack>
                    </Card>
                    <Text color={'#687076'} fontFamily={'body'} fontWeight={400} fontSize={14} py={4}>
                        1 Gem = US $1.00
                    </Text>

                </Center>
            </Card>
            <HStack justifyContent={'space-between'} py={4}>
                <Text color={'#7E868C'} fontFamily={'body'} fontWeight={500} fontSize={14} >
                    Tracking Code
                </Text>
                <Text color={'#000'} fontFamily={'body'} fontWeight={500} fontSize={14} >
                    125245 85
                </Text>

            </HStack>
            <HStack justifyContent={'space-between'} py={4}>
                <Text color={'#7E868C'} fontFamily={'body'} fontWeight={500} fontSize={14} >
                    Transaction time
                </Text>
                <Text color={'#000'} fontFamily={'body'} fontWeight={500} fontSize={14} >
                    July 30,2020
                </Text>

            </HStack>
            <Box borderColor={'#C1C8CD'} borderWidth={1} my={4} />
            <Center py={4}>
                <Pressable>
                    <Text onPress={() => setShowView1(false)} color={'#4C77EA'} fontFamily={'body'} fontWeight={600} fontSize={17} >
                        View Transaction Details
                    </Text>
                </Pressable>
            </Center>
        </VStack>
    );
   

  

    return (
        <Modal isOpen={isOPen} onClose={onClose} {...rest}>
            <Modal.Content bg={"#F9F9F9"} w={"full"} maxWidth="600px">
                <Modal.Body>
                    {showView1 ?  <ViewOne />: <TransectionDetails  /> }
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
