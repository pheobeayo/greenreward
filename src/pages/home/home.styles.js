import styled from "styled-components";
import { device } from "../../utils/device";


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#0F160F;
`;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:#0F160F;

 @media ${device.laptopL} { 
    max-width: 1400px;
    }

 @media ${device.desktop} {
    max-width: 2500px;
    }
    
`;



export const BarWrapper = styled.div`
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-top:2rem;
      margin-left:2rem;
      margin-bottom:3rem;
      `;

export const CentreWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:#0F160F;
 
   
      `;



export const TextContainer = styled.div`
width: 100vw;
position: absolute;
top: 55%;
left: 35%;
margin-left:30rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

 & h1 {
    font-size: 3rem;
    color: #8BC34A;
    font-weight: 600;
    line-height:1rem;
 }

 & h2 {
    font-size: 3rem;
    color: #8BC34A;
    font-weight: 600;
    line-height:1rem;
    margin-left: 2rem;
 }

 & h3{
    font-size:1.3rem;
    color:#fff;
    font-weight:500;
    line-height:1.5rem;
 }

`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:2rem;
    margin-left:12rem;
    
    
`;

export const GButton = styled.button`
display: flex;
background:#8BC34A;
width:15rem;
border: 1px solid #8BC34A; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;


`;

export const LButton = styled.button`
display: flex;
background: #0F160F;
width:15rem;
border: 1px solid  #8BC34A; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:1rem;


`;

export const ImageContainer = styled.section`
 width: 100%;
 height: 50%;
 display: flex;
 gap: 1.5rem;
 justify-content: space-around;
 align-items: center;
 margin-top: 25rem;
`;

export const WelcomeWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
`;    

export const HowContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:25rem;
`;  

export const RecycleContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:25rem;
`;  


export const FooterWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
 
 
`;

export const SubfooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:3rem;

 
`;

