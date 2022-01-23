import React from "react";
import Card from "../../../utility//Card";
import UserProfileCardFooter from "./UserProfileCardFooter";
import UserProfileCardHeader from "./UserProfileCardHeader";
import UserProfileCardImage from "./UserProfileCardImage";

export default function UserProfileCard({
    avatar,
    userName,
    expiresAt,
    houseImage,
    likes,
    topBid,
    onUserPress,
}) {
    return (
        <Card borderRadius={20} mb="4" mx="4" py={2} px="4">
            <UserProfileCardHeader
                avatar={avatar}
                userName={userName}
                daysLeft={expiresAt}
                onUserPress={onUserPress}
            />
            <UserProfileCardImage houseImage={houseImage} />
            <UserProfileCardFooter likes={likes} topBid={topBid} />
        </Card>
    );
}
