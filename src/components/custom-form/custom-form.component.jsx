import React from "react";
import "./custom-form.styles.scss";

const CustomForm = ({children, addClass, ...otherProps}) => (
    <form className={`custom-form${addClass ? ` ${addClass}` : ''}`} {...otherProps}>
        {children}
    </form>
);

export default CustomForm;
