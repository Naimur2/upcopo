import { Image, Pressable, Stack, Text } from "native-base";
import React from "react";
import usePlaceBid from '../../../hooks/usePlaceBid';
import PlaceBidAction from "../../common/PlaceBidAction";
const bannar=[{
    _id: "1",
    houseName: "Turn Key House",
    expiresAt: "Jan 24, 2022 18:00:30",
    currentBid: "4.33",
    owner: "Luckas",
    builtAt: "1942",
    address: "1523 N 106th St, Mesa, AZ 85207",
    sqrfit: " 3,160sqft",
    image: "https://image.freepik.com/darmowe-wektory/wiejski-krajobraz-z-domami_23-2148669788.jpg",
    description:
        "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
    bed: 3,
    bath: 4,
    createdAt: "Jan 22, 2022 18:00:30",
    mapImage:
        "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
    topBid: 0.8,
    lastBid: 0.7,
    likes: Math.round(Math.random() * 1 + 100),
    minimumBid: 0.541455,
    userId: "111",
    collectionId: "fgvhfhgf",
    latitude: 40.724066,
    longitude: 285.999418,
}]

export default function Banner() {
    const houseId=bannar[0]._id;
    const minimumBid=bannar[0].minimumBid;

    const [bidHistory, showActions, showActionHandler, closeActionHandler] =
    usePlaceBid(houseId);
    return (
        <Stack
            mb={6}
            mx={4}
            overflow={"hidden"}
            borderRadius={20}
            bg={{
                linearGradient: {
                    colors: ["#76C893", "transparent"],
                    start: [0.2, 0],
                    end: [1, 0],
                },
            }}
        >
            <Stack py="3" px={4} space="3">
                <Text
                    w="220"
                    fontWeight={600}
                    fontSize={18}
                    fontFamily={"body"}
                >
                    Find a lender who can offer competitive
                </Text>
                <Pressable
                    alignSelf={"flex-start"}
                    bg="#fff"
                    px={5}
                    borderRadius={10}
                    py={2}
                    onPress={showActionHandler}
                >
                    <Text
                        textAlign={"center"}
                        fontFamily={"body"}
                        color="#52B69A"
                        fontWeight={600}
                        fontSize={16}
                    >
                        Bid Now
                    </Text>
                </Pressable>
            </Stack>
            <Image
                position={"absolute"}
                zIndex={-1}
                source={{
                    uri: "https://image.freepik.com/darmowe-wektory/wiejski-krajobraz-z-domami_23-2148669788.jpg",
                }}
                h="full"
                w="full"
                alt="cover image"
            />
            <PlaceBidAction
                isOpen={showActions}
                bidHistoryState={bidHistory}
                onClose={closeActionHandler}
                houseId={houseId}
                minimumBid={minimumBid}
            />
        </Stack>
    );
}
