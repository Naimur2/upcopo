import { HStack, VStack } from "native-base";
import React, { useState } from "react";
import Icon from "../utility/Icon";
import ClosedView from "./closed/ClosedView";

export default function Main() {
    const [expanded, setExpanded] = useState(false);
    const [user, setuser] = useState({
        user: "Md Ahnaf aksar",
        mobile: "(307) 555-0133",
        email: "ahnafa.fgs5@co.li",
        avatar: "https://image.freepik.com/free-vector/cute-panda-gaming-cartoon-icon-illustration-animal-technology-icon-concept-premium-flat-cartoon-style_138676-2685.jpg",
        private:true,
    });

    return (
        <VStack>
            <HStack bg={"#52B69A"} justifyContent={"flex-end"} py={4} pr={4}>
                <Icon
                    onPress={() => setExpanded((prev) => !prev)}
                    name={expanded ? "x" : "edit"}
                    color={"#FFFFFF"}
                    size={20}
                />
            </HStack>
            <ClosedView userDetails={user} />
        </VStack>
    );
}

/* {expanded ? (
    <Box >
       <MainOnEdit/>
    </Box>
) : (
    <>
        <MainBody />
        <MainFooter />
    </>
)} */
