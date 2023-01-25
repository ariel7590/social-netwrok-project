import React from "react";
import "./form-input.styles.scss";

const FormInput = ({addClass,...props}) => (
	<input className={`my-input${addClass ? ` ${addClass}` : ''}`} {...props}/>
);

export default FormInput;
