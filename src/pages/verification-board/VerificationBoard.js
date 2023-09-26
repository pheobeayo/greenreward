import React from "react";
import {
    VerificationParent,
    VerificationWrapper,
    SubfooterWrapper,
    Wrapper,
    FormHeader,
    BarWrapper,
    CButton,
    VButton
} from "./verification.board.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import FormTextInput from "../../components/custom-input/FormTextInput";
import { Link } from "react-router-dom";







const VerificationBoard = () => {




    return (
        <VerificationParent>
            <VerificationWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>

                  
                    <form>


                    <FormHeader>
                        <h3>Projects requiring Verification</h3>
                        <p>User Information</p>


                    </FormHeader>

                        <FormTextInput
                            labelName="Name of user"
                            placeholder="user's name"
                            name="user"


                        />
                        <FormTextInput
                            labelName="How user participated in recycling"
                            placeholder="recycling process"
                            name="process"



                        />

                        <FormTextInput
                            labelName="Picture of users’s recycling process"
                            placeholder="Picture of users’s recycling process"
                            name="picture"
                            height="5rem"


                        />
                        <FormTextInput
                            labelName="Name of the recycling centre"
                            placeholder="Name of the recycling centre"
                            name="centre"



                        />

                        <FormTextInput
                            labelName="Recycling process description"
                            placeholder="Recycling process description"
                            name="description"
                            height="5rem"



                        />


                        <FormTextInput
                            labelName="Weight of the recyclable objects"
                            placeholder="Enter the weight of the recyclable object in Kilogram"
                            name="weight"
                            

                        />

                        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}><VButton>Verify</VButton></Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><CButton>Cancel</CButton></Link>

                    </form>


                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </VerificationWrapper>
        </VerificationParent>

    );
};

export default VerificationBoard;