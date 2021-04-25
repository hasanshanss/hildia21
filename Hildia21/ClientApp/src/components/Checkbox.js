import React, { Component, useState, useEffect } from 'react';
import SearchInput from './SearchInput';


const Checkbox = ({ text }) => {
    return (
        <div className="pretty p-default p-curve p-toggle">
            <input type="checkbox" />
            <div className="state p-success p-on">
                <label className="white">{text}</label>
            </div>
            <div className="state p-danger p-off">
                <label className="gray">{text}</label>
            </div>
        </div>

    );
}

export default Checkbox;