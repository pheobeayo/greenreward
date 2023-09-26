import React from "react";
import {
    SustainableParent,
    SustainableWrapper,
    SubfooterWrapper,
    Wrapper,
    FormHeader,
    BarWrapper,
    Select,
    VButton
} from "./sustainable.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import FormTextInput from "../../components/custom-input/FormTextInput";
import {Link} from "react-router-dom";







const Sustainable = () => {




    return (
        <SustainableParent>
            <SustainableWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>

                    <FormHeader>
                        <h3>Sustainable Milestones</h3>


                    </FormHeader>
                    <form>



                        <Select>
                            <option value="" hidden>Choose how you actively participated</option>
                            <option value="1">Collection of waste (picking, using recycling bins, giving to collectors)</option>
                            <option value="2">Waste processing (sorting, heating etc)</option>
                            <option value="3">Re-manufacturing</option>

                        </Select>
                        <br></br>
                        <FormTextInput
                            labelName="Add a picture or video of your recycling process"
                            placeholder="Drag and drop or Select file from computer"
                            name="addPicture"
                            height='5rem'

                        />
                        <FormTextInput
                            labelName="Recycling process description"
                            placeholder="Brief description of your recycling process"
                            name="description"
                            height="5rem"


                        />

                        <Select>
                            <option value="" hidden>Name of the recycling centre  (only users of verified centers get rewarded)</option>
                            <option value="1">Green Recycling Centres</option>
                            <option value="2">Revona Recycling</option>
                            <option value="3">Wecyclers Recycling Exchange</option>
                            <option value="4">United Cyclers Ltd</option>
                            <option value="5">Srs storage hub</option>
                            <option value="6">Freee Recyle Limited</option>
                            <option value="7">Recycledge</option>
                            <option value="8">Mottainai Recycling  Company</option>
                            <option value="9">Integrated wingservices limited</option>
                            <option value="10">Evolvers Lead recycling</option>
                            <option value="11">VOYAKINS GLOBAL CONCEPT</option>
                            <option value="12">Solaristique Nigeria Limited</option>
                            <option value="13">SFQ ventures limited</option>
                            <option value="14">WCP</option>
                            <option value="15">Safigreen</option>
                            <option value="16">Others, type the name</option>


                        </Select>
                        <br></br>

                        <FormTextInput
                            labelName="Weight of the recyclable objects"
                            placeholder="Enter the weight of the recyclable object in Kilogram"
                            name="addPicture"
                            height="5rem"

                        />

                        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}><VButton>Verify</VButton></Link>


                    </form>


                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </SustainableWrapper>
        </SustainableParent>

    );
};

export default Sustainable;