import { useNavigation, useRoute } from "@react-navigation/native";
import { debounce } from "lodash";
import { FlatList, Text, VStack } from "native-base";
import React from "react";
import SafeAreaNew from "../../utility/SafeAreaNew";
import SearchPagesHeader from "../searchPages/components/SearchPagesHeader";
import UserProfileCard from "./components/UserProfileCard";

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
        username: "jhoj00",
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
        username: "70hhhhnder",
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

export default function UserProfile() {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
    let [search, setSearch] = React.useState("");

    let [service1, setService1] = React.useState("ux");
    let [service2, setService2] = React.useState("l2h");

    const onSearchHandler = debounce((tc) => {
        setSearch(tc);
    }, 500);

    React.useEffect(() => {
        onSearchHandler(text);
        return () => {
            setSearch("");
        };
    }, [text]);

    const filterSearch = userProfiles.filter((item) =>
        search !== ""
            ? item.username
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            : item
    );

    const route = useRoute();

    const renderItem = ({ item }) => (
        <UserProfileCard
            avatar={item.userAvatar}
            userId={item._id}
            userName={item.username}
            expiresAt={"2 days left"}
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
    const renderNull = () => {
        if (search.length > 0 && filterSearch.length === 0) {
            return (
                <Text fontFamily="body" textAlign="center" color="#000">
                    No Results Found
                </Text>
            );
        }
        return null;
    };
    return (
        <SafeAreaNew>
            <VStack flex="1">
                <FlatList
                    ListHeaderComponent={
                        <SearchPagesHeader
                            onClear={() => setText("")}
                            onSearch={(txt) => setText(txt)}
                            key={"1"}
                            value={text}
                            service1={service1}
                            setService1={(v) => setService1(v)}
                            service2={service2}
                            setService2={(v) => setService2(v)}
                        />
                    }
                    ListHeaderComponentStyle={{
                        paddingHorizontal: 16,
                    }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    bg={"#f9f9f9"}
                    data={filterSearch}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    ListFooterComponent={renderNull}
                />
            </VStack>
        </SafeAreaNew>
    );
}

// <UserProfileHeader
//     name={userProfiles.name}
//     userAvatar={userProfiles.userAvatar}
//     userCoverphoto={userProfiles.userCoverPhoto}
//     isVarified={userProfiles.isVarified}
// />

// search.length > 0 && filterSearch.length === 0 ? (
//     <Text fontFamily="body" textAlign="center" color="#000">
//         No Results Found
//     </Text>
// ) : null
