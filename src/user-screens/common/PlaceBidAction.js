import { Actionsheet, Box, HStack, Stack, Text } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import Icon from "../../utility/Icon";
import KeyBoardView from "../../utility/KeyBoardView";
import PaceBidActionCard from "./placeBidActionComponents/PaceBidActionCard";
import PlaceBidActionFooter from "./placeBidActionComponents/PlaceBidActionFooter";

export default function PlaceBidAction({
    isOpen,
    onOpen,
    onClose,
    bidHistoryState,
    houseId,
    minimumBid = 0.000000000000000001,
}) {
    const [showAll, setShowAll] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    const balance= useSelector(state=>state.user.balance)

    const showAllHandler = () => {
        setShowAll((prev) => !prev);
    };

    const hasError = (vari) => {
        if (+vari < +minimumBid) {
            setError("Please Bid with more value");
            return true;
        }
        if (+vari < +0) {
            setError("Please Bid with more value");
            return true;
        }

        if (vari === "") {
            setError("Invalid Bid");
            return true;
        }
        setError("");
        return false;
    };

    const submitHandler = () => {
        if (hasError(value)) {
            return;
        } else {
            console.log({ houseId, value });
        }
    };

    const onChangeHandler = (text) => {
        hasError(text);
        setValue(text);
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
                    <PlaceBidActionFooter
                        onSubmit={submitHandler}
                        balance={balance}
                        minumumbid={minimumBid}
                        onChange={onChangeHandler}
                        errorMessage={error}
                        value={value}
                    />
                </KeyBoardView>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
