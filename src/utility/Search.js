import React, { useImperativeHandle, useRef, useState } from "react";
import FormInput from "./FormInput";
import Icon from "./Icon";

const Search = React.forwardRef(
    ({ onSearch, value, placeHolder, onClear, ...rest }, ref) => {
        const [showIcon, setShowIcon] = useState(false);

        const inputRef = useRef();
        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current.focus();
            },
        }));

        return (
            <FormInput
                onRightIconPress={onClear}
                leftElement={
                    <Icon
                        p="1"
                        ml={3}
                        mr={1}
                        borderRadius={50}
                        bg={"#52B69A"}
                        color={"#fff"}
                        name={"search"}
                        size={16}
                    />
                }
                onFocus={() => setShowIcon(true)}
                onBlur={() => setShowIcon(false)}
                onChangeText={onSearch}
                placeHolder={placeHolder || "Search your houses"}
                type={"text"}
                borderColor={"#fff"}
                py={2.5}
                rightIcon={showIcon && "x"}
                value={value}
                ref={inputRef}
                {...rest}
            />
        );
    }
);
export default Search;
