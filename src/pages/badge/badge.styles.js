import styled from "styled-components";
import { device } from "../../utils/device";


export const BadgeParent = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background:#0F160F;

     `;

export const BadgeWrapper = styled.div`
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
     
        
   
`;

export const SummaryContainer1 = styled.section`
      width: 50%;
      height: 50%;
      display: flex;
      align-items: center;
      margin-left:14rem;
      align-items: center;
      flex-direction: row;
      gap: 2rem;
      justify-items:space-around;


      & img {
        margin-left:20rem;
        margin-bottom:2rem;
      }
                
  `;




    
export const Header = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    margin-left:8rem;
    margin-top:5rem;

    & h2 {
        color: #fff;
        font-size:2rem;
        line-height:0.5rem;
        margin-left:1rem;
     }

    
       
    `;

export const TextContainer= styled.div`
    width: 90vw;
    margin-left:23rem;
    color:#fff;
    align-content:center;
    justify-content: center;
    
    
    
    
    & h3{
        font-weight:700;
        font-size:1.5rem;
        font-family: Sans-Serif;
        color:  #fff;
        margin-left:6rem;
        line-height:5rem;
        
        }
    
    & p {
        font-weight:400;
        font-size:1.2rem;
        line-height:2rem;
        font-family: Sans-Serif;
        color:#fff;
        margin-left:5rem;
        
    }
    

    
    
    `;  

   
    
    export const SubfooterWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    background:#1A1818;
    align-items: center;
    margin-top: 8rem;
    
     
    `;
    
    
    
         
       
       
    
    
      