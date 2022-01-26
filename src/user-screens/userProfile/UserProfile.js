import { useNavigation, useRoute } from "@react-navigation/native";
import { debounce } from "lodash";
import { Box, FlatList, VStack } from "native-base";
import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import UserProfileMenu from "./components/UserProfileMenu";

const userProfiles = [
    {
        _id: "1",
        name: "John Doe",
        username: "70nder",
        userAvatar:
            "https://image.freepik.com/free-vector/cute-panda-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3508.jpg",
        isVarified: true,
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
        name: "John Doe",
        username: "70nder",
        userAvatar:
            "https://image.freepik.com/free-vector/cute-panda-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3508.jpg",
        isVarified: true,

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
        name: "John Doe",
        username: "70nder",
        userAvatar:
            "https://image.freepik.com/free-vector/cute-panda-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3508.jpg",
        isVarified: true,

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
        name: "John Doe",
        username: "70nder",
        userAvatar:
            "https://image.freepik.com/free-vector/cute-panda-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3508.jpg",
        isVarified: true,

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
        _id: "5",
        name: "John Doe",
        username: "70nder",
        userAvatar:
            "https://image.freepik.com/free-vector/cute-panda-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3508.jpg",
        isVarified: true,

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
];

const socialLinks = [
    { type: "facebook", url: "https://www.facebook.com/" },
    { type: "twitter", url: "https://twitter.com/home" },
    { type: "discord", url: "https://discord.com/" },
    { type: "instagram", url: "https://www.instagram.com/" },
];

const getRemainingTime = (expiresAt) => {
    const expiresAtTime = new Date(expiresAt);
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = expiresAt - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return "2 days left";
};


export default function UserProfile() {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
    let [search, setSearch] = React.useState("");

    let [service1, setService1] = React.useState('ux');
    let [service2, setService2] = React.useState('l2h');

    const onSearchHandler = debounce((text) => {
    
        setText(text);
    
    }, 500);

    React.useEffect(() => {
        onSearchHandler(text);

        return () => {
            setSearch("");
        };
    }, [text]);


    const filterSearch = userProfiles.filter((item) =>
        text !== ""
            ? item.username
                .toLocaleLowerCase()
                .includes(text.toLocaleLowerCase())
            : item
    );


    const route = useRoute();


    const renderItem = ({ item }) => (
        <UserProfileCard
            avatar={item.userAvatar}
            userId={item._id}
            userName={item.username}
            expiresAt={getRemainingTime(item.expiresAt)}
            houseImage={item.image}
            likes={item.likes}
            topBid={item.topBid}
            onUserPress={() =>
                navigation.navigate("OthersProfile", {
                    userId: item._id,
                })
            }
        />
    );

    return (
        <VStack flex="1">
            <Box key={"1"}>
                {/* <UserProfileHeader
                        name={userProfiles.name}
                        userAvatar={userProfiles.userAvatar}
                        userCoverphoto={userProfiles.userCoverPhoto}
                        isVarified={userProfiles.isVarified}
                    /> */}
                <UserProfileMenu
                    searchValue={text}
                    onClear={() => setText("")}
                    onSearch={onSearchHandler}
                    setService1={(value1) => setService1(value1)}
                    setService2={(value2) => setService2(value2)}
                    service1={service1}
                    service2={service2}
                />
            </Box>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                bg={"#f9f9f9"}
                data={filterSearch}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </VStack>
    );
}
