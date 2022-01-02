import { Box, Pressable } from "native-base";
import React from "react";
import FormInput from "../../../utility/FormInput";
import Icon from "../../../utility/Icon";
import { useNavigation } from "@react-navigation/native";

export default function SearchArea() {

    const navigation =useNavigation();
    
    return (
        <Box
            px="4"
            alignItems={"center"}
            justifyContent={"space-around"}
            flexDir={"row"}
            my={6}
            mx={4}
        >
            <FormInput
                w="86%"
                type="search"
                leftIconColor={"#687076"}
                py={3}
                borderRadius={12}
                leftIcon={"search"}
                placeHolder={"Search your houses"}
            />

            <Pressable
                alignItems={"center"}
                borderColor={"#E6E8EB"}
                borderRadius={14}
                _pressed={{bg:'light.100'}}
                p={3}
                bg="white"
                onPress={()=>navigation.navigate('Notifications')}
            >
                <Icon name="notification" color="#687076" size={30} />
            </Pressable>
        </Box>
    );
}
