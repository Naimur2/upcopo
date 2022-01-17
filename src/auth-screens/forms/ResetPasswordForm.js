import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Stack } from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import FormInput from "../../utility/FormInput";
import UtilityBtn from "../../utility/UtilityBtn";

export default function ResetPasswordForm({onFormSubmit}) {
   
    const [isPassword, setIsPassword] = useState(true);
    const [isPassword1, setIsPassword1] = useState(true);


    const submitHandler =(values) => {
        onFormSubmit(values)
    };

    const getButtonVariant = (errors) => {
        if (errors.username || errors.password) {
            return "disabled";
        }
        return "";
    };

    const ResetPasswordSchema = Yup.object().shape({
        password1: Yup.string().required('Password is required').min(6, "Minimum six Digit"),
        password2: Yup.string().required('Password is required')
           .oneOf([Yup.ref('password1'), null], 'Passwords must match')
    });



    return (
        <Formik
            validationSchema={ResetPasswordSchema}
            initialValues={{password1: "",password2:"" }}
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
                <Stack space="3">
                    <FormInput
                        value={values.password1}
                        onBlur={handleBlur("password1")}
                        onChangeText={handleChange("password1")}
                        placeHolder={"Password"}
                        error={errors.password1 && touched.password1}
                        errorMessage={errors.password1}
                        leftIcon={"lock"}
                        rightIcon={
                            values.password1.length > 0 &&
                            (isPassword ? "eye-open" : "eye-off")
                        }
                        type={isPassword && "password"}
                        onRightIconPress={() => setIsPassword((prev) => !prev)}
                    />
                    <FormInput
                    value={values.password2}
                    onBlur={handleBlur("password2")}
                    onChangeText={handleChange("password2")}
                    placeHolder={"Retype password"}
                    error={errors.password2 && touched.password2}
                    errorMessage={errors.password2}
                    leftIcon={"lock"}
                    rightIcon={
                        values.password2.length > 0 &&
                        (isPassword1 ? "eye-open" : "eye-off")
                    }
                    type={isPassword1 && "password"}
                    onRightIconPress={() => setIsPassword1((prev) => !prev)}
                />
                   <UtilityBtn
                        onPress={handleSubmit}
                        mt="8%"
                        title={"Confirm"}
                        varient={getButtonVariant(errors)}
                        disabled={getButtonVariant(errors)}
                    />
                </Stack>
            )}
        </Formik>
    );
}
