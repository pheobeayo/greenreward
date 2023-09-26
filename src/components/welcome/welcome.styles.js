import styled from "styled-components";


export const WelcomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#0F160F;

     `;

export const WelcomeWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#0F160F;
 
    
      `;

export const SummaryContainer = styled.section`
      width: 100%;
      height: 50%;
      display: flex;
      gap: 1.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:1rem;
    `;
    
export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content:left;
    align-content: left;
    margin-top:3rem;
    margin-left:3rem;

    & h2 {
        color: #6BBE45;
        font-size:2rem;
        line-height:2.5rem;
        font-weight:500;
     }

     & h3 {
        color: #6BBE45;
        font-size:2rem;
        line-height:2.5rem;
        font-weight:500;
     }
       
    `;



    export const SummaryCard = styled.div`
      width: 25%;
      height: 50%;
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem;
      background: #0F160F;
      
      & p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        color: #fff;
        margin-left:1rem;
      }
    
      & h1 {
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
        margin-left:1rem;
      }

      & h3 {
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
        margin-left:1rem;
      }

      

      
    `;
export const MButton = styled.button`
display: flex;
background:#8BC34A;
width:15rem;
border: 1px solid #8BC34A; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left: 3rem;


`;