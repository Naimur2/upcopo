import { useNavigation } from "@react-navigation/native";
import { HStack, Pressable, Stack, Text } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

//onPress={()=>navigation.navigate('Home')}

export default function MainFooter() {
    const navigation = useNavigation();

    const FooterButton = ({ title, leftIcon, rightIcon="arrow-right",...rest }) => {
        return (
            <Pressable
                borderBottomColor={"#DFE3E6"}
                borderBottomWidth={1.5}
                px={2}
                py={3}
                onPress={() => console.log(title)}
                {...rest}
            >
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                    <HStack space={2} alignItems={"center"}>
                        <Icon name={leftIcon} size={20} color={"#7E868C"} />
                        <Text
                            color={"#3D454A"}
                            fontFamily={"body"}
                            fontWeight={600}
                            fontSize={17}
                        >
                            {title}
                        </Text>
                    </HStack>
                    <Icon name={rightIcon} size={20} color={"#7E868C"} />
                </HStack>
            </Pressable>
        );
    };
    
    return (
        <Stack bg={"#F9F9F9"} pt={2}>
            <Text
                fontSize={18}
                fontFamily={"body"}
                fontWeight={400}
                color={"#7E868C"}
                pl={2}
                py={2}
            >
                General Settings
            </Text>
            <FooterButton title={"Wallet"} leftIcon={"wallet"} />
            <FooterButton
                title={"Notifications"}
                leftIcon={"notification"}
            />
            <FooterButton title={"History"} leftIcon={"history"} />
            <FooterButton title={"Help"} leftIcon={"headphone"} />
            <FooterButton mt={4} borderBottomWidth={0} title={"Logout"} leftIcon={"logout"} rightIcon="x" />

        </Stack>
    );
}
