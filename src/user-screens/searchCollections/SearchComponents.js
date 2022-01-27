import React from 'react';
import Search from "../.././utility/Search";
export default function SearchComponents({ value, onSearch, onClear,key }) {
    return (
        <Search placeholder="Search in Messages" mb={4}
            value={value}
            onSearch={onSearch}
            onClear={onClear}
            key={key}

        />
    );
}