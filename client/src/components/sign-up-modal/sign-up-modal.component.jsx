import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomForm from "../custom-form/custom-form.component";
import FormInput from "../form-input/form-input.component";
import Modal from "../modal/modal.component";
import "./sign-up-modal.styles.scss";

const SignUpModal=()=>{

return(
    <Modal buttonClass='sign-up-btn' buttonText='Sign Up'>
        <CustomForm addClass='sign-up-form'>
            <div className="sign-up-header">
                <span className="sign-up-title">Sign Up</span>
                <span className="close-btn">&#10006;</span>
            </div>
            <span>It's fast and easy.</span>
            <hr className="sign-up-hr"/>
            <div className="name-container">
                <FormInput addClass='sign-up-input' type='text' placeholder="First Name" required />
                <FormInput addClass='sign-up-input' type='text' placeholder="Last Name" required />
            </div>
            <FormInput addClass='sign-up-input' type='email' placeholder='Email' required />
            <FormInput addClass='sign-up-input' type='password' placeholder='Password' required />
            <FormInput addClass='sign-up-input' type='password' placeholder='Confirm password' required />
            <CustomButton addClass='submit-btn'>Sign Up</CustomButton>
        </CustomForm>
    </Modal>
)
}

export default SignUpModal;