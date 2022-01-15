import { useNavigation } from "@react-navigation/native";
import { HStack, Pressable, Stack, Text } from "native-base";
import React from "react";
import Card from "../.././utility/Card";
import Icon from "../.././utility/Icon";

//onPress={()=>navigation.navigate('Home')}

export default function MainFooter() {
    const navigation = useNavigation();
    const MainFooterGroupButton = ({ btnName, iconName }) => {
        return (
            <Card borderBottomColor={"#DFE3E6"} borderBottomWidth={1.5}>
                <Pressable onPress={() => {
                    { { console.log(btnName) } }
                }}>
                    <HStack alignItems={"center"} justifyContent={"space-between"}>
                        <HStack space={2} alignItems={"center"}>
                            <Icon name={iconName} size={20} color={"#7E868C"} />
                            <Text color={"#3D454A"} fontFamily={'body'} fontWeight={600} fontSize={17}
                            >{btnName}</Text>
                        </HStack>
                        <Icon name={"arrow-right"} size={20} color={"#7E868C"} />
                    </HStack>
                </Pressable>

            </Card>

        );
    };
    const LogoutBtn = () => {
        return (
            <Card my={4}>
                <Pressable onPress={() => {
                    { { console.log('ok') } }
                }}>

                    <HStack alignItems={"center"} justifyContent={"space-between"}>
                        <HStack space={2} alignItems={"center"}>
                            <Icon name={"x"} size={20} color={"#7E868C"} />
                            <Text color={"#3D454A"} fontFamily={'body'} fontWeight={600} fontSize={17}
                            >logout</Text>
                        </HStack>
                        <Icon name={"x"} size={20} color={"#7E868C"} />
                    </HStack>
                </Pressable>
            </Card>
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
            <MainFooterGroupButton btnName={"Wallet"} iconName={"wallet"} />
            <MainFooterGroupButton btnName={"Notifications"} iconName={"notification"} />
            <MainFooterGroupButton btnName={"History"} iconName={"history"} />
            <MainFooterGroupButton btnName={"Help"} iconName={"headphone"} />
            <LogoutBtn />
        </Stack>
    );
}
