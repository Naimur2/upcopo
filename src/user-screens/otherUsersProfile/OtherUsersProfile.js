import { useRoute } from "@react-navigation/native";
import { Center, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Card from "../../utility/Card";
import Icon from "../../utility/Icon";
import NoDataImage from "./components/NoDataImage";
import OtherUsersProfileBottom from "./components/OtherUsersProfileBottom";
import OtherUsersProfileHeader from "./components/OtherUsersProfileHeader";

const OtherUsersProfileHeaderData = {
    _id: "1",
    avatar: "https://image.freepik.com/free-vector/cute-panda-reading-book-cartoon-icon-illustration_138676-2683.jpg",
    userName: "Md Ahanf aksar",
    numberOfPosts: "231",
    numberOfFOllowers: "62267",
    numberOfFOllowing: "62267",
    intro: `Data processing it takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”   -J. K. Rowling`,
    isPrivate: false,
    houses: [
        {
            _id: "1",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "2",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "3",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "4",
            houseName: "Turn Key House",
            expiresAt: "Jan 26, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "5",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "6",
            houseName: "Turn Key House",
            expiresAt: "Jan 26, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
    ],
    saved: [
        {
            _id: "1",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "2",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "3",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "4",
            houseName: "Turn Key House",
            expiresAt: "Jan 26, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "5",
            houseName: "Turn Key House",
            expiresAt: "Jan 24, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
        {
            _id: "6",
            houseName: "Turn Key House",
            expiresAt: "Jan 26, 2022 18:00:30",
            currentBid: "4.33",
            owner: "Luckas",
            builtAt: "1942",
            address: "1523 N 106th St, Mesa, AZ 85207",
            sqrfit: " 3,160sqft",
            image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
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
        },
    ],
};

const NoData = () => (
    <Center mt={5}>
        <NoDataImage />
        <Text
            mt={2}
            fontWeight={500}
            fontFamily={"body"}
            fontSize={24}
            color={"#3D454A"}
        >
            This account is private
        </Text>
        <Text
            mt={1}
            fontWeight={400}
            fontFamily={"body"}
            fontSize={16}
            color={"#7E868C"}
            maxW={250}
            textAlign="center"
        >
            Follow this account to see their photos and videos
        </Text>
    </Center>
);

export default function OtherUsersProfile() {
    const route = useRoute();

    const [data, setData] = React.useState({});
    const [houses, setHouses] = React.useState([]);
    const [category, setCategory] = React.useState("");

    React.useEffect(() => {
        setData(OtherUsersProfileHeaderData);
        setCategory("houses");
        return ()=>{
            setData({});
            setCategory("");
        }
    }, [route]);

    React.useEffect(() => {
        setTimeout(()=>{
            const selectedData = data[category];
            setHouses(selectedData);
        },500)

    }, [category]);

    const renderHouse = houses ? (
        <OtherUsersProfileBottom houses={houses} />
    ) : null;

    return (
        <ScrollView bg={"#F9F9F9"} showsVerticalScrollIndicator={false}>
            <OtherUsersProfileHeader
                avatar={data.avatar}
                userName={data.userName}
                numberOfPosts={data.numberOfPosts}
                numberOfFOllowers={data.numberOfFOllowers}
                numberOfFOllowing={data.numberOfFOllowing}
                intro={data.intro}
            />
            <VStack py={4}>
                <Card mx={4} p={4} mt={4}>
                    <HStack justifyContent={"space-between"}>
                        <Icon name={"menu"} size={22} color={ category==='houses' ? "#11221C":"#889096"} />
                        <Icon name={"activity"} size={22} color={"#889096"} />
                        <Icon name={"tag"} size={22} color={category==='saved' ? "#11221C":"#889096"} />
                    </HStack>
                </Card>
            </VStack>
            {data.isPrivate ? <NoData /> : renderHouse}
        </ScrollView>
    );
}
