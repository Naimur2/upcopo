import { Input, VStack } from "native-base";
import React from "react";
import KeyBoardView from "../../../utility/KeyBoardView";

export default function CloseForm() {
    return (
        <KeyBoardView style={{backgroundColor:'#f9f9f9'}}>
            <VStack
                alignItems={"center"}
                justifyContent={"center"}
                w="full"
            >
                <Input w="full" variant="underlined" placeholder="Underlined" />
            </VStack>
        </KeyBoardView>
    );
}
