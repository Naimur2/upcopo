import { HStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

export default function CollectionCard(props) {
    return (
        <Card
            p={4}
            key={props._id}
            onPress={props.onPress}
        >
            <HStack alignItems={"center"} space={3}>
                <CardTitle value={props.standings} />
                <CardImage name={props.name} avatar={props.avatar} />
                <CardBody name={props.name} price={props.price} />
                <CardFooter
                    priceUp={props.priceUp}
                    priceUpPercentage={props.priceUpPercentage}
                />
            </HStack>
        </Card>
    );
}
