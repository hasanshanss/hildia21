
import React, { Component, useState, useEffect } from 'react'
import SearchInput from '../form/SearchInput'
import { useDispatch } from 'react-redux'
import { getPeople } from "../../pages/peoplePage/peopleActions"


const SearchBox = () => {

    const inputs = ["lastname", "name", "father", "dob", "address"];
   
    return (
        <React.Fragment>
            {
                inputs.map((name, i) => {
                    return <SearchInput
                        key={i}
                        name={name} />
                })
            }
        </React.Fragment>
    );
}

export default SearchBox;