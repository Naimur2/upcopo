import { HStack } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";
import UtilityBtn from "../../../utility/UtilityBtn";

const LovedHousesCardFooter = ({ onPlaceBid, price }) => (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
        <IconWithText
            iconName="etherium"
            text={price}
            iconColor={"#3D454A"}
            textStyle={{
                fontWeight: 700,
                fontFamily: "body",
                color: "#3D454A",
            }}
        />
        <UtilityBtn
            titleStyle={{
                fontWeight: 600,
                fontFamily: "body",
                fontSize: 16,
            }}
            title={"Place a Bid"}
            onPress={onPlaceBid}
        />
    </HStack>
);
export default LovedHousesCardFooter;
