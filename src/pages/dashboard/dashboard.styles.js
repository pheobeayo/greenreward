import styled from "styled-components";
import { device } from "../../utils/device";


export const DashboardParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#0F160F;
`;

export const DashboardWrapper = styled.div`
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
top: 45%;
left: 50%;
margin-left:30rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

 & h1 {
    font-size: 2.5rem;
    color: #8BC34A;
    font-weight: 600;
    line-height:1rem;
 }

 

 & h3{
    font-size:1.3rem;
    color:#fff;
    font-weight:500;
    line-height:1.5rem;
    margin-left:2.4rem;
 }

& img{
    margin-top: 10rem;
}
`;

export const ImageContainer = styled.section`
 width: 100%;
 height: 50%;
 display: flex;
 align-items: center;
 margin-top: 15rem;
`;




export const SubfooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:3rem;

 
`;

