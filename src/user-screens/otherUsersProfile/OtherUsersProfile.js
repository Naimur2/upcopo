import { useRoute } from "@react-navigation/native";
import { Box, ScrollView } from "native-base";
import React from "react";
import OtherUsersProfileBody from "./components/OtherUsersProfileBody";
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
            userId:'111',
            collectionId:'fgvhfhgf'
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
            userId:'111',
            collectionId:'fgvhfhgf'
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
            userId:'111',
            collectionId:'fgvhfhgf'
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
            userId:'111',
            collectionId:'fgvhfhgf'
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
            userId:'111',
            collectionId:'fgvhfhgf'
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
            userId:'111',
            collectionId:'fgvhfhgf'
        },
    ],
};

export default function OtherUsersProfile() {
    const route = useRoute();
    console.log(route.params);

    return (
        <ScrollView bg={"#F9F9F9"} showsVerticalScrollIndicator={false}>
            <OtherUsersProfileHeader
                avatar={OtherUsersProfileHeaderData.avatar}
                userName={OtherUsersProfileHeaderData.userName}
                numberOfPosts={OtherUsersProfileHeaderData.numberOfPosts}
                numberOfFOllowers={
                    OtherUsersProfileHeaderData.numberOfFOllowers
                }
                numberOfFOllowing={
                    OtherUsersProfileHeaderData.numberOfFOllowing
                }
                intro={OtherUsersProfileHeaderData.intro}
            />
            <OtherUsersProfileBody />
            <OtherUsersProfileBottom
                houses={OtherUsersProfileHeaderData.houses}
            />
        </ScrollView>
    );
}
