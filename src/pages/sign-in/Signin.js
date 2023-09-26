
import React from "react";
import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";







const Signin = () => {


    return (
        <SigninParent>
            <SigninWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>SIGN INTO YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>

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



                        <FormButton
                            text="Sign in"
                            color="#000"
                            borderColor="#8BC34A"

                        />

                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#8BC34A' }}>Sign up</Link></p>


                    </form>

                    <div style={{ height: '80rem', width: '45rem', marginRight: "5rem" }}><img src={signupimage} alt="signupimage" /></div>
                </Wrapper>

            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;