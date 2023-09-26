import styled from "styled-components";

export const FooterParent = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    background:#1A1E1A;

    
`;

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#1A1E1A;
   

    
    
`;

export const SubscribeContainer = styled.div`
    width: 100vw;
    height: 50%;
    margin-top:3rem;
  
    
    
    
    & h3 {
      margin-top: 1rem;
      color: #ffffff;
      margin-left: 6rem;
      font-size:1.8rem;
      font-weight:700;
     
      
      
  }

  
  & h4 {
    line-height:1rem;
    color: #ffffff;
    margin-left: 5rem;
    font-weight:200;
    
}
    & p {
      line-height:1rem;
      color: #ffffff;
      margin-left: 5rem;
      margin-bottom:2rem;
      
  }
    `;

   





export const ButtonContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: 1rem;

`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:  40%;
  height: 15%;
  margin-left: 3rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #8BC34A;
  border-radius: 5px;
  height: 90%;
 background: #1A1E1A;

  & .search-input {
    border: 0;
    outline: none;
    background: #1A1E1A;
    color: #fff;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;

export const Button = styled.button`
background:#8BC34A;
width:5rem;
border: 1px solid #8BC34A; 
border-radius:5px;
color:#000000;
height: 1.8rem;
align-items: center;
margin-top:0.275rem;
margin-bottom:0.25rem;
font-size: 1rem;
display:flex;
margin-left:13rem;


`;


