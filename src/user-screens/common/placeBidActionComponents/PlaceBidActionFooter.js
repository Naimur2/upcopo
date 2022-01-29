import { HStack, Stack, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import FormInput from "../../../utility/FormInput";
import Icon from "../../../utility/Icon";
import UtilityBtn from "../../../utility/UtilityBtn";

export default function PlaceBidActionFooter({
    onSubmit,
    balance,
    minumumbid,
    onChange,
    errorMessage,
    value,
}) {
    return (
        <Stack p={4}>
            <Card p={4}>
                <Text
                    fontSize="19"
                    color="#000"
                    fontWeight={"600"}
                    fontFamily={"body"}
                >
                    Place a bid
                </Text>
                <Text
                    fontSize="13"
                    color="#8E8E93"
                    fontWeight={"400"}
                    fontFamily={"body"}
                >
                    You must bid at least {minumumbid} ETH
                </Text>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Card borderColor={"#F1F3F5"} borderWidth={1}>
                        <Icon name="etherium" size={28} color={"#687076"} />
                    </Card>

                    <Card w={"85%"}>
                        <FormInput
                            placeHolder={"0.00"}
                            keyboardType="numeric"
                            borderColor={"#ECEEF0"}
                            onChangeText={onChange}
                            value={value}
                            pl={4}
                        />
                    </Card>
                </HStack>
                <VStack
                    justifyContent={"center"}
                    alignItems={"center"}
                    space={2}
                >
                    {errorMessage ? (
                        <Text
                            fontSize="13"
                            color="#EB5757"
                            fontWeight={"400"}
                            fontFamily={"body"}
                           
                        >
                            {errorMessage}
                        </Text>
                    ):null}
                    <Text
                        fontSize="13"
                        color="#8E8E93"
                        fontWeight={"400"}
                        fontFamily={"body"}
                    >
                        Your Balance is {balance} ETH
                    </Text>
                    <UtilityBtn
                        title={"Submit"}
                        w={"100%"}
                        onPress={onSubmit}
                    />
                </VStack>
            </Card>
        </Stack>
    );
}
