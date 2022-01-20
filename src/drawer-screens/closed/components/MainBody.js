import { Divider, HStack, Modal, Pressable, Stack, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleSwitch from "toggle-switch-react-native";
import { setUserPrivacy } from "../../../../store/slices/authSlice";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";

export default function MainBody() {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const description = privacy
        ? "When your account is private, only people you approve will see your updates. Your existing followers won’t be affected"
        : "When your account is public, everyone will see your updates. Your existing followers won’t be affected";

    let clear = true;

    const [showModal, setShowModal] = useState(false);
    const [privacy, setPrivacy] = useState(false);

    const switchToggler = () => {
        setShowModal((prev) => !prev);
    };

    const updatePrivacy = () => {
        setShowModal((prev) => !prev);
        setPrivacy((prev) => !prev);
    };



    const ConfirmModal = () => (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content bg={"#fff"} w={["80%", "70%"]} maxWidth="600px">
                <Modal.Body>
                    <Stack space={2} px={4}>
                        <Text
                            textAlign={"center"}
                            fontWeight={600}
                            fontFamily={"body"}
                            color="#11181C"
                            fontSize={16}
                        >
                            {`Switch to ${
                                privacy ? "public" : "private"
                            } account`}
                        </Text>
                        <Text
                            textAlign={"center"}
                            fontWeight={400}
                            fontFamily={"body"}
                            color="#687076"
                            fontSize={14}
                        >
                            {privacy
                                ? "If you switch to a Public Account, everyone will see your photos & videos. You also receive updates about our latest collections."
                                : "If you switch to a Personal Account, only people you approve will see your photos & videos. You also won’t receive updates about our latest collections."}
                        </Text>
                    </Stack>
                </Modal.Body>
                <Divider bg={"#E6E8EB"} />
                <Modal.Footer bg={"#fff"} p="0">
                    <HStack>
                        <Pressable onPress={switchToggler} p="2" w="1/2">
                            <Text
                                textAlign={"center"}
                                fontWeight={500}
                                fontFamily={"body"}
                                color="#889096"
                                fontSize={16}
                            >
                                Cancel
                            </Text>
                        </Pressable>
                        <Pressable onPress={updatePrivacy} p="2" w="1/2">
                            <Text
                                textAlign={"center"}
                                fontWeight={500}
                                fontFamily={"body"}
                                color="#11181C"
                                fontSize={16}
                            >
                                Confirm
                            </Text>
                        </Pressable>
                    </HStack>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );

    return (
        <Stack pt={2}>
            <Text
                fontSize={18}
                fontFamily={"body"}
                fontWeight={400}
                color={"#7E868C"}
                pl={2}
                py={2}
            >
                Account
            </Text>

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
                            {privacy ? "Private" : "Public"}
                        </Text>
                    </HStack>
                    <HStack>
                        <ToggleSwitch
                            isOn={privacy}
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
            <ConfirmModal isShown={showModal} />
        </Stack>
    );
}
