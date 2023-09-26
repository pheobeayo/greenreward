import styled from "styled-components";

export const FormLabel = styled.label`
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 2rem;
`;

export const FormControl = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "75%")};
  border: 1px solid #E8F3DB;
  border-radius: 5px;
  height: ${(props) => (props.width ? props.width : "10%")};
  padding: 0 1rem;
  background: #E8F3DB;
  margin-top: 1rem;

  & .form-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #E8F3DB;
    color: #252730;
    font-size: 1rem;
  }

  & .form-input::placeholder {
    color: #252730;
    line-height: 20px;
    font-size: 0.8rem;
  }

`;