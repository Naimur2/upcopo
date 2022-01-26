import { useRoute } from "@react-navigation/native";
import { Avatar, ScrollView, Stack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import lib from "../../../lib";
import CollectionButtons from "./components/CollectionButtons";
import CollectionsBody from "./components/CollectionsBody";
import CollectionsHeader from "./components/CollectionsHeader";
import CollectionsTab from "./components/CollectionsTab";

const tabData = {
    _id: "100",
    collectionId: "420",
    collectionName: "BostonClub",
    items: [
        {
            _id: "1",
            image: "https://media.istockphoto.com/vectors/fisherman-with-rod-fishing-at-mountain-lake-morning-landscape-vector-vector-id871204174?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "2",
            image: "https://media.istockphoto.com/vectors/fisherman-with-rod-fishing-at-mountain-lake-morning-landscape-vector-vector-id871204174?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "3",
            image: "https://media.istockphoto.com/vectors/fisherman-with-rod-fishing-at-mountain-lake-morning-landscape-vector-vector-id871204174?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "4",
            image: "https://media.istockphoto.com/vectors/fisherman-with-rod-fishing-at-mountain-lake-morning-landscape-vector-vector-id871204174?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
    ],
    owned: [
        {
            _id: "5",
            image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "6",
            image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "7",
            image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "8",
            image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "9",
            image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
    ],
    liked: [
        {
            _id: "10",
            image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "11",
            image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "12",
            image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "13",
            image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
        {
            _id: "14",
            image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            description:
                "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
            bed: 3,
            bath: 4,
            createdAt: "Jan 22, 2022 18:00:30",
            mapImage:
                "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
            topBid: 0.8,
            lastBid: 0.7,
            likes: 40,
            minimumBid: 0.541455,
            userId: "111",
            collectionId: "fgvhfhgf",
        },
    ],
};

const collectionInformation = {
    _id: "420",
    collectionName: "Boston Club",
    varified: false,
    price: 15499.86,
    priceUp: true,
    avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
    priceUpPercentage: 46.03,
    standings: 3,
    ethAddress: "0xet54trw757007QR5e5c757007",
    description:
        "Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space",
    coverPhoto:
        "https://image.freepik.com/free-vector/dragon-breathing-fire-attacks-castle_107791-5336.jpg",
    items: "10100",
    floorPrice: "4.2",
    owners: "5900",
    volume: "237000000",
};

export default function Collections({ navigation }) {
    const [selectedCategory, setSelectedCategory] = React.useState("items");

    const [collectionHouses, setCollectionHouses] = React.useState([]);

    const route = useRoute();
    const data = route.params;
 
    const width = Dimensions.get("window").width;

    React.useEffect(() => {
        setSelectedCategory("items");
    }, [data._id]);

    React.useEffect(() => {
        const tabInfo = tabData[selectedCategory];
        setCollectionHouses(tabInfo);
    }, [selectedCategory]);

    return (
        <ScrollView bg="#f9f9f9">
            <Stack>
                <CollectionsHeader coverPhoto={data.coverPhoto} />
                <Stack px={4}>
                    <Stack
                        width={width}
                        bg="#f9f9f9"
                        position={"absolute"}
                        alignItems={"center"}
                        top="-50"
                        borderTopRadius={40}
                    >
                        <Avatar
                            source={{
                                uri: data.avatar,
                            }}
                            size={24}
                            top="-40"
                        />
                    </Stack>
                    <Stack>
                        <CollectionsBody
                            description={data.description}
                            collectonName={data.collectionName}
                            ethAddress={data.ethAddress}
                        />
                        <CollectionButtons
                            items={lib.numFormatter(+data.items)}
                            floorPrice={`${data.floorPrice} ETH`}
                            owners={lib.numFormatter(data.owners)}
                            volume={lib.numFormatter(+data.volume)}
                            onItemKeyPress={() =>
                                navigation.navigate("UserProfile")
                            }
                        />
                        <CollectionsTab
                            onTabPress={(cat) => setSelectedCategory(cat)}
                            data={collectionHouses}
                            currentTab={selectedCategory}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </ScrollView>
    );
}
