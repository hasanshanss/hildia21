import React from 'react'


const SearchInput = ({name, placeholder, onInputChangeHandler}) => {
    

    return (
        <div className="wrap-input2">
            <input className="input2" type="text" name={name} placeholder={placeholder} onChange={(e) => onInputChangeHandler(e)} />
            {/* <span className={`focus-input2 ${ person[name] ? "w-value" : ""}`} data-placeholder={name.toUpperCase()}></span> */}
        </div>
    );
}

export default SearchInput;