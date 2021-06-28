import React from 'react';
import './searchbox-styles.css'

export const Search = ({placeholder,handleChange}) => (
	<div className='search'>
		<input 
			type='search'
		    placeholder={placeholder}
			onChange = {handleChange} 
		/>
	</div>
);