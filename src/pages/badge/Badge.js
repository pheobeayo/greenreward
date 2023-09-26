import React from "react";
import {
    BadgeParent,
    BadgeWrapper,
    Header,
    SubfooterWrapper,
    BarWrapper,
    SummaryContainer1,
    TextContainer,
    Wrapper
} from "./badge.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import coin from "../../assets/coin.png";









const Badge = () => {


    return (
        <BadgeParent>
            <BadgeWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                    <Header><h2>Claim <b style={{color:'#C5E1A4'}}>your Rewards</b></h2>
                        
                    </Header>
                    <TextContainer>
                        <h3>Congratulations on Earning Your Rewards!</h3>
                        <p>You've taken meaningful steps towards a greener future,
                            <br></br>and now it's time to enjoy the fruits of your eco-friendly
                            <br></br>actions. By recycling and participating in responsible waste
                            <br></br>disposal, you've earned valuable tokens that reflect your
                        <br></br>commitment to sustainability.</p>
                    </TextContainer>
                    <SummaryContainer1>


                        <img src={coin} alt="coin" />

                    </SummaryContainer1>


                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </BadgeWrapper>



        </BadgeParent>




    )





}


export default Badge;