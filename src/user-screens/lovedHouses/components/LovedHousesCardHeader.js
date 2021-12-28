import { Text } from "native-base";
import React from "react";

const LovedHousesCardHeader = ({ address }) => (
    <Text
    fontFamily={"body"}
    fontWeight={"500"}
    color={"#3D454A"}
    fontSize={"18"}
>
    {address}
</Text>

);
export default LovedHousesCardHeader;