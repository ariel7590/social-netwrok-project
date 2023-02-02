import { React, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./modal.styles.scss";

const Modal = ({buttonClass, buttonText, children, ...otherProps}) => {
	const [isHidden, setHidden] = useState(false);

	return (
		<div>
			<CustomButton addClass={buttonClass} {...otherProps} onClick={() => setHidden(!isHidden)}>
				{buttonText}
			</CustomButton>
			{!isHidden ? children : null}
		</div>
	);
};

export default Modal;
