import { Box, Stack, Text } from "native-base";
import React, { useState } from "react";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

export default function Main() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Stack>
            <MainHeader
                iconName={expanded ? "x" : "edit"}
                onEditIconPress={() => setExpanded((prev) => !prev)}
            />
            {expanded ? (
                <Box bg={"blue.500"}>
                    <Text>Hello</Text>
                </Box>
            ) : (
                <>
                    <MainBody />
                    <MainFooter />
                </>
            )}
        </Stack>
    );
}
