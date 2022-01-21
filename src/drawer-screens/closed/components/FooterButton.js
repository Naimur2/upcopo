import { HStack, Pressable, Text } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

//onPress={()=>navigation.navigate('Home')}

const FooterButton = ({
    title,
    leftIcon,
    rightIcon = "arrow-right",
    onPress,
    ...rest
}) => {
    return (
        <Pressable
            borderBottomColor={"#DFE3E6"}
            borderBottomWidth={1.5}
            px={2}
            py={3}
            onPress={onPress}
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

export default FooterButton;
