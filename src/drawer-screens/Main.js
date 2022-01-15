import { Box, Stack } from "native-base";
import React, { useState } from "react";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MainOnEdit from "./components/MainOnEdit";

export default function Main() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Stack>
            <MainHeader
                iconName={expanded ? "x" : "edit"}
                onEditIconPress={() => setExpanded((prev) => !prev)}
            />
            {expanded ? (
                <Box >
                   <MainOnEdit/>
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
