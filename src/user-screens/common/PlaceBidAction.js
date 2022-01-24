import { Actionsheet, Box, HStack, Stack, Text } from "native-base";
import React from "react";
import Icon from "../../utility/Icon";
import KeyBoardView from "../../utility/KeyBoardView";
import PaceBidActionCard from "./placeBidActionComponents/PaceBidActionCard";
import PlaceBidActionFooter from "./placeBidActionComponents/PlaceBidActionFooter";


export default function PlaceBidAction({ isOpen, onOpen, onClose,bidHistoryState }) {
    const [showAll, setShowAll] = React.useState(false);

    const showAllHandler = () => {
        setShowAll((prev) => !prev);
    };

    const items = showAll ? bidHistoryState : bidHistoryState.slice(0, 2);

    return (
        <Actionsheet isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <Actionsheet.Content bg={"#F9F9F9"}>
                <KeyBoardView style={{ width: "100%" }}>
                    <Box h={60} px={4} justifyContent="center">
                        <HStack justifyContent={"space-between"}>
                            <Text
                                fontSize="16"
                                color="#3D454A"
                                fontWeight={"500"}
                                fontFamily={"body"}
                            >
                                History of bid
                            </Text>
                            {showAll ? (
                                <Icon
                                    onPress={showAllHandler}
                                    name={"x"}
                                    size={20}
                                    color={"#7E868C"}
                                />
                            ) : (
                                <Text
                                    fontSize="16"
                                    color="#3D454A"
                                    fontWeight={"500"}
                                    fontFamily={"body"}
                                    onPress={showAllHandler}
                                >
                                    All
                                </Text>
                            )}
                        </HStack>
                    </Box>
                    <Stack w="100%">
                        {items.map((data) => (
                            <PaceBidActionCard
                                key={data._id}
                                price={data.price}
                                varified={data.varified}
                                userName={data.userName}
                                counter={data.counter}
                                avatar={data.avatar}
                            />
                        ))}
                    </Stack>
                    <PlaceBidActionFooter />
                </KeyBoardView>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
