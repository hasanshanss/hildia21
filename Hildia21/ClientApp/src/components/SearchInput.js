import React, { Component, useState, useEffect } from 'react';


const SearchInput = ({text}) => {
    
    const [inputVal, setInputVal] = useState("");

    return (
        <div className="wrap-input2">
            <input className="input2" type="text" name={text} value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <span className={`focus-input2 ${inputVal ? "w-value" : ""}`} data-placeholder={text.toUpperCase()}></span>
        </div>
    );
}

export default SearchInput;