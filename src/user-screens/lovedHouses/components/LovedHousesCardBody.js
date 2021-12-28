import { HStack } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";

const LovedHousesCardBody = ({ numOfBath, numOfBed }) => {

    const icons = [
        {
            _id: "1",
            text: `${numOfBed} bed`,
            icon: "bed-filled",
            iconColor: "#889096",
        },
        {
            _id: "2",
            text: `${numOfBath} bath`,
            icon: "bath-filled",
            iconColor: "#889096",
            iconStyle: { size: 15 },
        },
        {
            _id: "3",
            text: "Saved",
            icon: "heart-dark",
            iconColor: "#000",
            iconStyle: { size: 15 },
        },
    ];
    return (
        <HStack justifyContent={"space-between"} alignItems={"center"}>
            {icons.map((icon) => (
                <IconWithText
                    key={icon._id}
                    iconName={icon.icon}
                    iconColor={icon.iconColor}
                    text={icon.text}
                    iconStyle={icon.iconStyle || ""}
                />
            ))}
        </HStack>
    )


};
export default LovedHousesCardBody;