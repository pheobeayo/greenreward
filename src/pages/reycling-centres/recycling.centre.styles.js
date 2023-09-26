import styled from "styled-components";
import { device } from "../../utils/device";

export const RecyclingParent = styled.div`
    width: 100vw;
    height: 155vh;
    display: flex;
    flex-direction: column;
    background:#0F160F;

     `;

export const RecyclingWrapper = styled.div`
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
   
  

   
    & table {
        width: 75%;
        height: 90%;
        color:#fff;
        margin-top: 5rem;
        margin-left:10rem;
        
    }

 & th {
    text-align: left;
    font-size:1.5rem;
 }

 th, td {
    padding: 15px;
  }
 
      `;


export const SubfooterWrapper = styled.div`
width: 100%;
height: 20%;
display: flex;
background:#1A1818;
align-items: center;
margin-top:15rem;


 
`;



     
   
   


  