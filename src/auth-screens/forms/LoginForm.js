import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Stack } from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import FormInput from "../../utility/FormInput";
import UtilityBtn from "../../utility/UtilityBtn";
import FormCheckBox from "../common/FormCheckBox";
import FormFooter from "../common/FormFooter";

export default function LoginForm({onFormSubmit}) {
    let clean = false;
    const navigation = useNavigation();
    const [isPassword, setIsPassword] = useState(true);
    const [reminedMe, setReminedMe] = useState(true);
    
    const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required."),
        password: Yup.string().required("Password is required."),
    });

    const submitHandler = (values) => {
        const loginValues = {
            ...values,
            reminedMe,
        };
        onFormSubmit(loginValues)
       
    };

    const getButtonVariant = (errors) => {
        if (errors.username || errors.password) {
            return "disabled";
        }
        return "";
    };

    return (
        <Formik
            validationSchema={LoginSchema}
            initialValues={{ username: "", password: "" }}
            onSubmit={submitHandler}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Stack space="3">
                    <FormInput
                        value={values.username}
                        onChangeText={handleChange("username")}
                       
                        placeHolder={"Username"}
                        leftIcon={"profile"}
                        error={errors.username}
                       
                    />
                    <FormInput
                        value={values.password}
                        focused={true}
                        onChangeText={handleChange("password")}
                       
                        placeHolder={"Password"}
                        error={errors.password}
                        leftIcon={"lock"}
                        rightIcon={
                            values.password.length > 0 &&
                            (isPassword ? "eye-open" : "eye-off")
                        }
                        type={isPassword && "password"}
                        onRightIconPress={() => setIsPassword((prev) => !prev)}
                    />
                    <FormCheckBox
                        checkBoxText={"Remember Me"}
                        secondaryText={"Forget password ?"}
                        onForgetPress={() => navigation.navigate("ForgotPass")}
                        isChecked={reminedMe}
                        onChange={() => setReminedMe((prev) => !prev)}
                    />
                    <UtilityBtn
                        mt="8%"
                        varient={getButtonVariant(errors)}
                        title={"Log In"}
                        onPress={handleSubmit}
                        // disabled={getButtonVariant(errors)}
                    />

                    <FormFooter
                        bottomText={" Didn’t have an account?"}
                        linkText={"Sign Up"}
                        onLinkPress={() => navigation.navigate("Register")}
                    />
                </Stack>
            )}
        </Formik>
    );
}
