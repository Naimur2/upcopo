import { Button } from "native-base";
import React from "react";

const UtilityBtn = React.forwardRef(
    ({ title, titleStyle, varient, onPress, ...rest }, ref) => {
        const prressedBg = varient === "disabled" ? "#6B7175" : "#489982";
        return (
            <Button
                onPress={onPress}
                borderRadius={8}
                py={2}
                _pressed={{ bg: prressedBg }}
                _text={{
                    color: "white",
                    fontFamily: "body",
                    fontWeight: "600",
                    fontSize: "17",
                    ...titleStyle,
                }}
                bg={varient === "disabled" ? "#889096" : "#52B69A"}
                ref={ref}
                {...rest}
            >
                {title ? title : ""}
            </Button>
        );
    }
);
export default UtilityBtn;
