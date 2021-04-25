  
import React, { Component, useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import Checkbox from './Checkbox';

const Form = () => {
    return (
		<div className="wrap-contact2">
			<form className="contact2-form">
				<SearchInput text="name"/>
				<SearchInput text="surname"/>
				<SearchInput text="patronymic"/>
				<SearchInput text="dob"/>

				{/* <div class="row">
					<div class="col-md-12">
						<Checkbox text="Family"/>
						<Checkbox text="Neighborhood"/>
						
					</div>
				</div> */}
				
			</form>
		</div>
    );
}

export default Form;