import styled from "styled-components";

export const Form = styled.form``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 600px) {
    display: flex;
    margin: 1rem;
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

export const FormField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.3rem;

  @media screen and (min-width: 600px) {
    margin: 0;

    .first__input {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }

    .second__input {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 90%;
  height: 60px;
  padding: 0.5rem;
  border-radius: 50px;
  border: 1px solid rgb(221, 221, 221);

  @media screen and (min-width: 600px) {
    border-radius: 0;
    width: 100%;
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
  @media screen and (min-width: 600px) {
  }
`;

export const SearchButton = styled.button`
  color: white;
  background-color: #003580;
  position: absolute;
  right: 0.3rem;
  border-radius: 40px !important;
  height: 3rem;
  width: 3rem;
  max-height: 3rem;
  outline: none;
  border: none;
`;
