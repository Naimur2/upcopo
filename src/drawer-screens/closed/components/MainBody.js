import { HStack, Stack, Text } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleSwitch from "toggle-switch-react-native";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";
import CModal from "./CModal";
import { SHeader } from "./MainFooter";

export default function MainBody() {
    const privacy = useSelector((state) => state.user.private);
    const [isPrivate, setIsPrivate] = useState(privacy);
    const [showModal, setShowModal] = useState(false);
    const disPatch = useDispatch();

    const description = isPrivate
        ? "When your account is private, only people you approve will see your updates. Your existing followers won’t be affected"
        : "When your account is public, everyone will see your updates. Your existing followers won’t be affected";

    const modalSubtitle = isPrivate
        ? "If you switch to a Public Account, everyone will see your photos & videos. You also receive updates about our latest collections."
        : "If you switch to a Personal Account, only people you approve will see your photos & videos. You also won’t receive updates about our latest collections.";

    const modalTitle = `Switch to ${privacy ? "public" : "private"} account`;

    const switchToggler = () => {
        setShowModal((prev) => !prev);
    };

    const updatePrivacy = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            const data = await res.json();
            console.log(data);
            setShowModal((prev) => !prev);
            setIsPrivate((prev) => !prev);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Stack pt={2}>
            <SHeader title="Account" />

            <Card>
                <HStack justifyContent={"space-between"}>
                    <HStack space={4} alignItems={"center"}>
                        <Icon
                            bg="#52B69A"
                            p="2"
                            borderRadius={50}
                            name={"home"}
                            size={18}
                            color={"#fff"}
                        />
                        <Text
                            fontSize={16}
                            fontFamily={"body"}
                            fontWeight={600}
                            color={"#3D454A"}
                        >
                            {isPrivate ? "Private" : "Public"}
                        </Text>
                    </HStack>
                    <HStack>
                        <ToggleSwitch
                            isOn={isPrivate}
                            offColor="#C0CBC8"
                            onColor={"#52B69A"}
                            animationSpeed={200}
                            size="medium"
                            onToggle={switchToggler}
                        />
                    </HStack>
                </HStack>
                <Text
                    fontSize={14}
                    fontFamily={"body"}
                    fontWeight={400}
                    color={"#687076"}
                    py={4}
                >
                    {description}
                </Text>
            </Card>
            <CModal
                onCancel={() => setShowModal(false)}
                onSuccess={updatePrivacy}
                isOPen={showModal}
                heading={modalTitle}
                subtitle={modalSubtitle}
            />
        </Stack>
    );
}
