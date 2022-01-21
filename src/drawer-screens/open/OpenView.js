import { VStack } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../store/slices/authSlice";
import OpenForm from "./components/OpenForm";
import OpenHeader from "./components/OpenHeader";


export default function OpenView({ isOpen }) {
    const userDetails = useSelector((state) => state.auth);
    const [image, setImage] = React.useState(userDetails.avatar);
    const dispatch =useDispatch();

    const updateImage = (uri) => {
        setImage(uri);
    };
    const formSubmissionHandle = (data) => {
        const values = {
            ...data,
            avatar: image,
        };
        dispatch(updateUserProfile(values))
    };

    return (
        <VStack
            height={isOpen ? "full" : 0}
            overflow={isOpen ? "visible" : "hidden"}
        >
            <OpenHeader image={image} updateImage={updateImage} />
            <OpenForm submitHandler={formSubmissionHandle} />
        </VStack>
    );
}
