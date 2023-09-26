import React from "react";
import {
    RecyclingParent,
    RecyclingWrapper,
    SubfooterWrapper,
    Wrapper,
    BarWrapper,
} from "./recycling.centre.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";







const Recyclingcentre = () => {




    return (
        <RecyclingParent>
            <RecyclingWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>

                    <table>
                        <tr>
                            <th><b>Recycling Centres</b></th>
                            <th><b>Location</b></th>
                            <th><b>Status</b></th>
                        </tr>
                        <tr>
                            <td>Green Recycling Centres</td>
                            <td>Plot 51B Obikings street Estate, Amuwo Odofin, Lagos</td>
                            <td>Verified</td>
                        </tr>
                        <tr>
                            <td>Revona Recycling</td>
                            <td>17A Olubunmi Rotimi St, Lekki Phase 1 101241, Lagos</td>
                            <td>Verified</td>
                        </tr>
                        <tr>
                            <td>Wecyclers Recycling Exchange</td>
                            <td>44 Obalende Rd, Ikoyi 106104, Lagos</td>
                            <td>Verified</td>
                        </tr>
                        <tr>
                            <td>Srs storage hub</td>
                            <td>M6JJ+Q3X, Itele Rd, 112104, Ota, Ogun State</td>
                            <td>Verified</td>
                        </tr>
                        <tr>
                            <td>United Cyclers Ltd</td>
                            <td>Opposite New Makun City, 110113, Ayetoro, Ogun State</td>
                            <td>Not Verified</td>
                        </tr>
                        <tr>
                            <td>Freee Recyle Limited</td>
                            <td>10 Abeokuta-Ibadan Rd, Expressway 200131, Ibadan, Oyo</td>
                            <td>Not Verified</td>
                        </tr>
                        <tr>
                            <td>Recycledge</td>
                            <td>4, Ifedapo Estate, Akanran Rd, Junction 200234, Ibadan, Oyo</td>
                            <td>Not Verified</td>
                        </tr>
                        <tr>
                            <td>Mottainai Recycling  Company</td>
                            <td>24 Soun Ajagungbade Ave, 200285, Ibadan, Oyo</td>
                            <td>Verified</td>
                        </tr>
                        <tr>
                            <td>Evolvers Lead recycling</td>
                            <td>Asa dam, Off Egbejila Road, area 240001, Ilorin</td>
                            <td>Verified</td>
                        </tr>
                        <tr>
                            <td>Integrated wingservices limited</td>
                            <td>No. 1 Elshaddia Avenue Alagbaka Akure  local government</td>
                            <td>Not Verified</td>
                        </tr>
                    </table>



                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </RecyclingWrapper>
        </RecyclingParent>

    );
};

export default Recyclingcentre;