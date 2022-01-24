import { HStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

export default function CollectionCard({
    _id,
    onPress,
    standings,
    name,
    avatar,
    price,
    priceUp,
    priceUpPercentage,
    ...rest
}) {
    return (
        <Card p={4} key={_id} onPress={onPress} {...rest}>
            <HStack alignItems={"center"} space={3}>
                <CardTitle value={standings} />
                <CardImage name={name} avatar={avatar} />
                <CardBody name={name} price={price} />
                <CardFooter
                    priceUp={priceUp}
                    priceUpPercentage={priceUpPercentage}
                />
            </HStack>
        </Card>
    );
}
