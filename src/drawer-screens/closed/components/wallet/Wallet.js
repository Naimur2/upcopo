import {
    Box,
    HStack,
    Image,
    Pressable,
    Stack,
    Text,
    VStack,
    Actionsheet,
} from "native-base";
import KeyBoardView from "../../../../utility/KeyBoardView";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../../../utility/Card";
import FormInput from "../../../../utility/FormInput";
import Icon from "../../../../utility/Icon";
const imgGem = require("../../../../../assets/images/fxemoji_gem.png");
const imgGemUri = RnImage.resolveAssetSource(imgGem).uri;

const TopUpBtn = ({ onPress, ...re }) => (
    <Pressable onPress={onPress} {...re}>
        <HStack
            bg={"#52B69A"}
            h={10}
            borderRadius={10}
            alignItems={"center"}
            justifyContent={"center"}
            space="2"
        >
            <Icon name={"sheild"} size={20} color={"#fff"} />
            <Text
                fontsize="18"
                fontFamily={"body"}
                fontWeight={600}
                color={"#fff"}
            >
                Top Up
            </Text>
        </HStack>
    </Pressable>
);

export default function Wallet({
    error,
    onClose,
    onValueChange,
    handleMoneyChange,
    onSubmit,
    money,
    isOpen,
    ...rest
}) {
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content bg={"#F9F9F9"}>
                <KeyBoardView style={{ width: "100%" }} behaviour="none">
                    <Stack w="100%" flex={1} {...rest}>
                        <Card my={2} p="4">
                            <HStack
                                space="2"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text
                                    fontsize="18"
                                    fontFamily={"body"}
                                    fontWeight={600}
                                    color={"#3D454A"}
                                >
                                    Gem Top Up
                                </Text>
                                <Icon
                                    onPress={onClose}
                                    name={"x"}
                                    size={20}
                                    color={"#7E868C"}
                                />
                            </HStack>
                            <VStack py={2} space={4} pr="4">
                                <Text
                                    fontsize="14"
                                    fontFamily={"body"}
                                    fontWeight={400}
                                    color={"#687076"}
                                >
                                    Source at top up from Gem
                                </Text>

                                <HStack justifyContent={"space-between"}>
                                    <Box
                                        h={12}
                                        w={12}
                                        borderWidth={1.5}
                                        borderColor={"#ECEEF0"}
                                        p={2}
                                        borderRadius={10}
                                    >
                                        <Image
                                            alt="gem_icon"
                                            h={"full"}
                                            w={"full"}
                                            source={{ uri: imgGemUri }}
                                        />
                                    </Box>
                                    <Box w={"80%"}>
                                        <FormInput
                                            keyboardType="numeric"
                                            type={"numeric"}
                                            p={4}
                                            onChangeText={onValueChange}
                                            value={money}
                                        />
                                    </Box>
                                    {error ? (
                                        <Text
                                            fontsize="14"
                                            fontFamily={"body"}
                                            fontWeight={400}
                                            color={"#687076"}
                                        >
                                            {error}
                                        </Text>
                                    ) : null}
                                </HStack>
                                <Box
                                    borderWidth={1.5}
                                    borderColor={"#fff"}
                                    borderBottomColor={"#F1F3F5"}
                                    pt={4}
                                />
                                <Text
                                    fontsize="16"
                                    fontFamily={"body"}
                                    fontWeight={700}
                                    color={"#52B69A"}
                                    pt={2}
                                >
                                    Total price is US ${money}
                                </Text>
                                <TopUpBtn onPress={onSubmit} />
                            </VStack>
                        </Card>
                    </Stack>
                </KeyBoardView>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
