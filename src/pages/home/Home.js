import React from "react";
import {
        BarWrapper,
        CentreWrapper,
        HomeParent,
        HomeWrapper,
        TextContainer,
        ButtonContainer,
        GButton,
        LButton,
        ImageContainer,
        WelcomeWrapper,
        HowContainer,
        RecycleContainer,
        FooterWrapper,
        SubfooterWrapper

} from "./home.styles";
import Navbar from "../../components/navbar/Navbar";
import ornament from "../../assets/ornament.png";
import middleimage from "../../assets/middleimage.png";
import Welcome from "../../components/welcome/Welcome";
import How from "../../components/how/How";
import Recycle from "../../components/recycle/Recycle";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import { Link } from "react-router-dom";








const Home = () => {






        return (
                <HomeParent>
                        <HomeWrapper>
                                <BarWrapper>
                                        <Navbar />
                                </BarWrapper>
                                <CentreWrapper>
                                        <TextContainer>
                                                <h1>Empower climate change and sustainable</h1>
                                                <h2>carbon reduction through recycling.</h2>
                                                <h3> Capture every of your recycling moments or habit and get rewarded for empowering change</h3>
                                                <ButtonContainer><Link to='/sustainable-milestones' style={{ textDecoration: 'none', color: 'black' }}><GButton>Sustainable Milestones</GButton></Link>
                                                <Link to='/verification-board' style={{ textDecoration: 'none', color: 'white' }}><LButton>Verification board</LButton></Link>
                                                </ButtonContainer>

                                        </TextContainer>
                                        <ImageContainer>
                                                <img src={ornament} alt={ornament} />
                                                <img src={middleimage} alt={middleimage} />
                                                <img src={ornament} alt={ornament} />
                                        </ImageContainer>
                                </CentreWrapper>
                                <WelcomeWrapper>
                                        <Welcome />
                                </WelcomeWrapper>
                                <HowContainer>
                                        <How />
                                </HowContainer>
                                <RecycleContainer>
                                        <Recycle />
                                </RecycleContainer>
                                <FooterWrapper>
                                        <Footer/>
                                </FooterWrapper>
                                <SubfooterWrapper>
                                        <Subfooter/>
                                </SubfooterWrapper>
                        </HomeWrapper>



                </HomeParent>




        )



}


export default Home;