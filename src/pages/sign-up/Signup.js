import React, { useState } from "react";
import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader, 
    Select
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import Checkbox from "../../components/checkbox/Checkbox";







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };




    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Name"
                            placeholder="e.g Devon Lane"
                            name="name"

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                        <FormTextInput
                            labelName="State of residence"
                            placeholder="e.g Lagos State"
                            name="password"

                        />
                         <Select>
                            <option value="" hidden>What does your recycling habits look like</option>
                            <option value="1">I recycle often</option>
                            <option value="2">I recycle occasionally</option>
                            <option value="3">I don’t recycle at all</option>
                            
                        </Select>
                        <Select>
                            <option value="" hidden>Pick an option</option>
                            <option value="1">I’m a user</option>
                            <option value="2">I’m a representative of a recycling centre</option>
                            <option value="3">I don’t recycle at all</option>
                            
                        </Select>
                        
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept our Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />
                        <FormButton
                            text="Sign up"
                            color="#000"
                            borderColor="#8BC34A"

                        />

                        <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#8BC34A' }}>Sign in</Link></p>

                    </form>
                    <div style={{ height: '90rem', width: '30rem' }}><img src={signupimage} alt='signupimage' /></div>

                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;