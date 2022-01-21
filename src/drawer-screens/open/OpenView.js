import { VStack } from "native-base";
import React from "react";
import CloseForm from "./components/CloseForm";
import CloseHeader from "./components/CloseHeader";

export default function OpenView({ isOpen }) {
    return (
        <VStack
            height={isOpen ? "full" : 0}
            overflow={isOpen ? "visible" : "hidden"}
        >
            <CloseHeader />
            <CloseForm />
        </VStack>
    );
}
