import {
    Box,
    Center,
    Divider,
    HStack,
    Image,
    Modal,
    Pressable,
    Text,
    VStack
} from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../../../utility/Card";
import Icon from "../../../../utility/Icon";
import TransectionDetails from "./TransectionDetails";

const imgScan = require("../../../../../assets/images/wallet.png");
const imgGem = require("../../../../../assets/images/fxemoji_gem.png");
const wallet = RnImage.resolveAssetSource(imgScan).uri;
const imgGemUri = RnImage.resolveAssetSource(imgGem).uri;
const transectionDetailsData = [
    {
        _id: "1",
        type: "Tracking Code",
        price: "20.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "2",
        type: "Refill Card",
        price: "24.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "3",
        type: "Accumulate points",
        price: "15.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "4",
        type: "Transfer money",
        price: "18.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "5",
        type: "Use points ",
        price: "8.00",
        date: "July 30,2020",
        succeed: false,
    },
];

const ViewOne = ({ toggleTransection }) => (
    <VStack>
        <Card shadow={2} mb={4}>
            <Center>
                <Box
                    borderRadius={5}
                    mt={2}
                    mb={6}
                    h={1.5}
                    px="10"
                    bg="#DFE3E6"
                />
                <Box w="65%" h="130">
                    <Image
                        alt={"QR code"}
                        resizeMode="cover"
                        source={{ uri: wallet }}
                        h="full"
                        w="full"
                    />
                </Box>
                <HStack alignItems={"center"} space={1} pt={4}>
                    <Box h={7} w={7}>
                        <Image
                            alt="gem_icon"
                            h={"full"}
                            w={"full"}
                            source={{ uri: imgGemUri }}
                        />
                    </Box>
                    <Text
                        color={"#3D454A"}
                        fontFamily={"body"}
                        fontWeight={600}
                        fontSize={18}
                    >
                        Gem Balance
                    </Text>
                    <Text
                        color={"#11181C"}
                        fontFamily={"body"}
                        fontWeight={500}
                        fontSize={20}
                    >
                        0.05
                    </Text>
                </HStack>
                <Text
                    color={"#889096"}
                    fontFamily={"body"}
                    fontWeight={500}
                    fontSize={16}
                >
                    ( US $5.00 )
                </Text>

                <Card  bg={"#F2F8F6"} mt={4} py={3}>
                    <HStack alignItems={'center'} space={2}  px={8}>
                        <Icon name={"tick"} size={20} color={"#52B69A"} />
                        <Text
                            color={"#52B69A"}
                            fontFamily={"body"}
                            fontWeight={600}
                            fontSize={16}
                        >
                            Successfully Transaction
                        </Text>
                    </HStack>
                </Card>
                <Text
                    color={"#687076"}
                    fontFamily={"body"}
                    fontWeight={400}
                    fontSize={14}
                    py={4}
                >
                    1 Gem = US $1.00
                </Text>
            </Center>
        </Card>
        <VStack px={2} mt={2} space={2}>
            <HStack justifyContent={"space-between"}>
                <Text
                    color={"#7E868C"}
                    fontFamily={"body"}
                    fontWeight={500}
                    fontSize={14}
                >
                    Tracking Code
                </Text>
                <Text
                    color={"#000"}
                    fontFamily={"body"}
                    fontWeight={500}
                    fontSize={14}
                >
                    125245 85
                </Text>
            </HStack>
            <HStack justifyContent={"space-between"} >
                <Text
                    color={"#7E868C"}
                    fontFamily={"body"}
                    fontWeight={500}
                    fontSize={14}
                >
                    Transaction time
                </Text>
                <Text
                    color={"#000"}
                    fontFamily={"body"}
                    fontWeight={500}
                    fontSize={14}
                >
                    July 30,2020
                </Text>
            </HStack>
        </VStack>

        <Divider mt={4} bgColor={'#C1C8CD'} />

        <Center py={4}>
            <Pressable onPress={toggleTransection}>
                <Text
                    color={"#4C77EA"}
                    fontFamily={"body"}
                    fontWeight={600}
                    fontSize={17}
                >
                    View Transaction Details
                </Text>
            </Pressable>
        </Center>
    </VStack>
);

export default function TransectionPage({ isOPen, onClose, ...rest }) {
    const [showView1, setShowView1] = React.useState(true);

    return (
        <Modal isOpen={isOPen} onClose={onClose} {...rest}>
            <Modal.Content bg={"#F9F9F9"} w={"full"}>
                <Modal.Body>
                    {showView1 ? (
                        <ViewOne
                            toggleTransection={() => setShowView1(false)}
                        />
                    ) : (
                        <TransectionDetails
                            toggleTransection={() => setShowView1(true)}
                            transectionDetailsData={transectionDetailsData}
                        />
                    )}
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
