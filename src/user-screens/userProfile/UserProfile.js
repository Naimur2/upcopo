import { ScrollView, VStack, FlatList, Box } from "native-base";
import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import UserProfileHeader from "./components/UserProfileHeader";
import UserProfileMenu from "./components/UserProfileMenu";

const userProfiles = [
    {
        _id: "1",
        username: "70nder",
        varified: false,
        image_url:
            "https://st4.depositphotos.com/9058402/27184/v/380/depositphotos_271847624-stock-illustration-man-skateboarding-in-future-metropolis.jpg?forcejpeg=true",
        avatar: "https://image.freepik.com/free-psd/3d-cartoon-character-isolated-3d-rendering_235528-535.jpg",
        likes: 77,
        topBid: 6.0241,
        deadline: "Jan 1, 2022 18:00:30",
    },
    {
        _id: "2",
        username: "70nder",
        varified: false,
        image_url:
            "https://st4.depositphotos.com/9058402/27184/v/380/depositphotos_271847624-stock-illustration-man-skateboarding-in-future-metropolis.jpg?forcejpeg=true",
        avatar: "https://image.freepik.com/free-psd/3d-cartoon-character-isolated-3d-rendering_235528-535.jpg",
        likes: 89,
        topBid: 6.0241,
        deadline: "Jan 1, 2022 18:00:30",
    },
];

const getRemainingTime = (deadline) => {
    const deadlineTime = new Date(deadline);
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = deadline - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return "2 days left";
};

const renderItem = ({ item }) => (
    <UserProfileCard
        key={item._id}
        avatar={item.avatar}
        userName={item.username}
        deadline={getRemainingTime(item.deadline)}
        houseImage={item.image_url}
        likes={item.likes}
        topBid={item.topBid}
    />
);

export default function UserProfile({ route, navigation }) {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            bg={"#f9f9f9"}
            ListHeaderComponent={
                <Box key={"1"}>
                    <UserProfileHeader />
                    <UserProfileMenu />
                </Box>
            }
            data={userProfiles}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
