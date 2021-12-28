import { HStack } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";
import UtilityBtn from "../../../utility/UtilityBtn";

const LovedHousesCardFooter = ({ onPlaceBid,price }) => (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <IconWithText
                        iconName="etherium"
                        text={price}
                        iconColor={"#52B69A"}
                        textStyle={{
                            fontWeight: 700,
                            fontFamily: "body",
                            color: "#52B69A",
                        }}
                    />
                    <UtilityBtn title={"Place a Bid"} onPress={onPlaceBid} />
                </HStack>

);
export default LovedHousesCardFooter;