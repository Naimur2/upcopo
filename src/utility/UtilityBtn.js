import { Button } from "native-base";
import React from "react";

const UtilityBtn = React.forwardRef(
    ({ title, titleStyle, varient, onPress, ...rest }, ref) => {
        const varients = {
            disabled: {
                base: "#889096",
                pressed: "#6B7175",
                text: "#fff",
                border: null,
                borderWidth: 0,
                pressedText:'#fff'
            },
            blue: {
                base: "#0095F6",
                pressed: "transparent",
                text: "#fff",
                border: null,
                borderWidth: 0,
                pressedText:'#000'
            },
            outlined: {
                base: "transparent",
                pressed: "#0095F6",
                text: "#000",
                border: "#DFE3E6",
                borderWidth: 1,
                pressedText:'#fff'
            },
            white: {
                base: "#fff",
                pressed: "light.300",
                text: "#687076",
                border: null,
                borderWidth: 0,
                pressedText:"#687076"
            },
            gray: {
                base: "#ECEEF0",
                pressed: "light.300",
                text: "#7E868C",
                border: null,
                borderWidth: 0,
                pressedText:"#687076"
            },
        };

        return (
            <Button
                onPress={onPress}
                borderRadius={8}
                py={2}
                _pressed={{
                    bg: varient ? varients[varient].pressed : "#489982",
                    _text:{
                        color:varient ? varients[varient].pressedText : '#fff'
                    }
                }}
                _text={{
                    color: varient ? varients[varient].text : "#fff",
                    fontFamily: "body",
                    fontWeight: "600",
                    fontSize: "17",
                    ...titleStyle,
                }}
                bg={varient ? varients[varient].base : "#52B69A"}
                ref={ref}
                borderWidth={varient ? varients[varient].borderWidth : 0}
                borderColor={varient ? varients[varient].border : null}
                {...rest}
            >
                {title ? title : ""}
            </Button>
        );
    }
);
export default UtilityBtn;
