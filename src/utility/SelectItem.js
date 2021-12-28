import { CheckIcon, Select } from "native-base";
import React from "react";
import Icon from "./Icon";



function SelectItem({items,placeholder,selectedValue,onValueChange, ...rest }) {

    return (
        <Select
            selectedValue={selectedValue}
            accessibilityLabel={placeholder}
            placeholder={placeholder}
            color={"#687076"}
            borderColor={"#fff"}
            pl="3"
            bg="#fff"
            fontSize={13.5}
            fontFamily={"body"}
            dropdownIcon={
                <Icon
                    name="chevron-bottom"
                    size={18}
                    pr="3"
                    color={"#687076"}
                />
            }
            fontWeight={400}
            _selectedItem={{
                bg: "white",
                endIcon: <CheckIcon size="5" />,
            }}
            _actionSheetContent={{ bg: "#f9f9f9" }}
            onValueChange={onValueChange}
            {...rest}
        >
            {items.map((item) => (
                <Select.Item
                    _text={{ color: "#687076" }}
                    _pressed={{ bg: "#fafafa50" }}
                    key={item._id}
                    label={item.label}
                    value={item.value}
                />
            ))}
        </Select>
    );
}

export default SelectItem;
