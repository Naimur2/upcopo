import { Formik } from "formik";
import { HStack, VStack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import FormInput from "../../../utility/FormInput";
import UtilityBtn from "../../../utility/UtilityBtn";

export default function OpenForm({ submitHandler }) {
    const userDetails = useSelector((state) => state.auth);
    const [isPassword, setIsPassword] = React.useState(true);

    const Inputs = [
        { _id: "01", label: "Full Name", path: "user" },
        { _id: "02", label: "Email", path: "email" },
        { _id: "03", label: "Phone Number", path: "mobile" },
        { _id: "04", label: "Password", path: "password", type: "password" },
    ];
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const editSchema = Yup.object().shape({
        name: Yup.string().min(4, "Minimum four Digit"),
        email: Yup.string().email("Invalid Email"),
        password: Yup.string()
            .required("Password is required.")
            .min(6, "Minimum six Digit"),
        mobile: Yup.string()
            .min(11, "Phone number is not valid")
            .max(11, "Phone number is not valid")
            .matches(phoneRegExp, "Phone number is not valid"),
    });

    return (

            <Formik
                validationSchema={editSchema}
                initialValues={{
                    user: userDetails.user,
                    email: userDetails.email,
                    mobile: userDetails.mobile,
                    password: userDetails.password,
                }}
                onSubmit={submitHandler}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <VStack p={4} space={4}>
                        {Inputs.map((inp) => (
                            <FormInput
                                type={inp.type}
                                key={inp._id}
                                label={inp.label}
                                variant="underlined"
                                bg="transparent"
                                borderBottomColor="#DFE3E6"
                                borderBottomWidth={2}
                                py={2}
                                value={values[inp.path]}
                                onChangeText={handleChange(inp.path)}
                                error={errors[inp.path]}
                                errorMessage={errors[inp.path]}
                                rightIcon={
                                    inp === "password" &&
                                    values.password.length > 0 &&
                                    (isPassword ? "eye-open" : "eye-off")
                                }
                                onRightIconPress={() =>
                                    setIsPassword((prev) => !prev)
                                }
                            />
                        ))}
                        <HStack justifyContent={"flex-end"}>
                            <UtilityBtn
                                px={8}
                                title={"Save"}
                                onPress={handleSubmit}
                            />
                        </HStack>
                    </VStack>
                )}
            </Formik>

    );
}
