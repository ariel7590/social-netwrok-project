import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import CustomForm from "../custom-form/custom-form.component";
import "./sign-in.styles.scss";

const SignIn = () => {
	return (
			<CustomForm addClass="sign-in-form">
                <FormInput type={"email"} placeholder="email"/>
                <FormInput type={"password"} placeholder="password"/>
                <CustomButton>Sign in</CustomButton>
                <br />
                <span className="forgot-pass">Forgot your password?</span>
                <br />
                <hr className="sign-in-hr"/>
                <br />
                <CustomButton addClass="sign-up-btn">Sign up</CustomButton>
            </CustomForm>

	);
};

export default SignIn;
