import React from "react";
import {
        BarWrapper,
        CentreWrapper,
        DashboardParent,
        DashboardWrapper,
        TextContainer,
        SubfooterWrapper,
        ImageContainer

} from "./dashboard.styles";
import Navbar from "../../components/navbar/Navbar";
import Subfooter from "../../components/subfooter/Subfooter";
import greenimage from "../../assets/greenimage.png";










const Dashboard = () => {






        return (
                <DashboardParent>
                        <DashboardWrapper>
                                <BarWrapper>
                                        <Navbar />
                                </BarWrapper>
                                <CentreWrapper>
                                        <TextContainer>
                                                <h1>Welcome back EcoChampions</h1>
                                                
                                                <h3> Upload or edit your<b style={{color:'#6BBE45'}}> profile picture</b> and <b style={{color:'#6BBE45'}}>banner here</b></h3>
                                               
                                        </TextContainer>
                                       <ImageContainer> <img src={greenimage} alt={greenimage}/></ImageContainer>
                                </CentreWrapper>
                              
                                <SubfooterWrapper>
                                        <Subfooter/>
                                </SubfooterWrapper>
                        </DashboardWrapper>



                </DashboardParent>




        )



}


export default Dashboard;