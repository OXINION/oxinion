import styled from "styled-components";

export const Form = styled.form``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;

export const FormField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.3rem;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 90%;
  height: 60px;
  padding: 0.5rem;
  border-radius: 50px;
  border: 1px solid rgb(221, 221, 221) !important;

  @media screen and (min-width: 600px) {
    
  }
`;

export const FormLabel = styled.label`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.3rem;
  }
`;

export const FormInputField = styled.input`
  height: 20px;
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: #f5f5f5;
`;
