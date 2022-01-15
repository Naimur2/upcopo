import React, { useState } from "react";
import FormInput from "./FormInput";
import Icon from "./Icon";

 const Search=React.forwardRef(({ onSearch,value, showRightIcon, ...rest },ref)=> {

    const [showIcon,setShowIcon]=useState(false);


    return (
        <FormInput
            leftElement={
                <Icon
                    p="2"
                    ml={3}
                    mr={1}
                    borderRadius={50}
                    bg={"#52B69A"}
                    color={"#fff"}
                    name={"search"}
                    size={16}
                />
            }
            onFocus={()=>setShowIcon(prev=>!prev)}
            onChangeText={onSearch}
            placeHolder={"85208,Mesa, Az"}
            type={"text"}
            borderColor={"#fff"}
            py={2.5}
            rightIcon={showIcon && "x"}
            value={value}
            ref={ref}
            {...rest}
        />
    );
})
export default Search