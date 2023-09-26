import styled from "styled-components";
import { device } from "../../utils/device";

export const VerificationParent = styled.div`
    width: 100vw;
    height: 155vh;
    display: flex;
    flex-direction: column;
    background:#0F160F;

     `;

export const VerificationWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#0F160F;

    @media ${device.laptopL} { 
        max-width: 1400px;
        }
    
     @media ${device.desktop} {
        max-width: 2500px;
        }
    
     @media ${device.tablet} {
          max-width: 768px;
              }
     @media ${device.mobileL} {
                  max-width: 425px;
                  }
     @media ${device.mobileM} {
               max-width: 375px;
                      }
     @media ${device.mobileS} {
               max-width: 320px;
                          }  
        

    `;

export const BarWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    margin-top:2rem;
    margin-left:2rem;
    `;    
 
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background:#0F160F;
    justify-content:center;
    align-items:center;
   
  

   
    & form {
        width: 50%;
        height: 80%;
        margin-left:26rem;
        color:#fff;
        margin-top: 5rem;
        
    }
 
 


   

      `;

export const FormHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    margin-top: 8rem;
    margin-right: 3rem;
    margin-bottom:3rem;
    
   
    & h3 {
        margin-top:5rem;
        font-size:2rem;
        font-weight:500;
        line-height:0.1rem;
        color:#6BBE45;
        margin-right:4rem;
        
           
    }
    
    & p {
        font-size: 1.5rem;
        color:#fff;
        font-weight:400;
        line-height:0.1rem;
        margin-right:2rem;
    }



    `;



export const VButton = styled.button`
display: flex;
background:#8BC34A;
width:34rem;
border: 1px solid #8BC34A; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-top:2rem;


`;


export const CButton = styled.button`
display: flex;
background:#0F160F;
width:34rem;
border: 1px solid #8BC34A; 
border-radius:5px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-top:2rem;


`;


export const SubfooterWrapper = styled.div`
width: 100%;
height: 20%;
display: flex;
background:#1A1818;
align-items: center;
margin-top:28rem;


 
`;



     
   
   


  