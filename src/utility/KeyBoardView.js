import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function KeyBoardView({ children, ...rest }) {
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            enableOnAndroid
            
            {...rest}
        >
            {children}
        </KeyboardAwareScrollView>
    );
}
