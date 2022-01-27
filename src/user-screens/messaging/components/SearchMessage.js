import React from 'react';
import Search from "../../../utility/Search";
export default function SearchMessage({ value, onSearch, onClear }) {
    return (
        <Search placeholder="Search in Messages" mb={4}
            value={value}
            onSearch={onSearch}
            onClear={onClear}
        />
    );
}