import React from "react";
import Card from "../../../utility//Card";
import UserProfileCardFooter from "./UserProfileCardFooter";
import UserProfileCardHeader from "./UserProfileCardHeader";
import UserProfileCardImage from "./UserProfileCardImage";

export default function UserProfileCard({
    avatar,
    userName,
    deadline,
    houseImage,
    likes,
    topBid,
}) {
    return (
        <Card p="4">
            <UserProfileCardHeader
                avatar={avatar}
                userName={userName}
                daysLeft={deadline}
            />
            <UserProfileCardImage houseImage={houseImage} />
            <UserProfileCardFooter likes={likes} topBid={topBid} />
        </Card>
    );
}
