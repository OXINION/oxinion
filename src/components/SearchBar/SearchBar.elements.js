import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 30vh;
  background: url("https://images.unsplash.com/photo-1507666664345-c49223375e33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80")
    center center no-repeat;
  object-fit: cover;
  background-size: cover;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 600px) {
    display: flex;
    margin: 1rem;
    width: 65%;
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
  .first__input {
    margin-top: 2rem;
  }

  @media screen and (min-width: 600px) {
    margin: 0;

    .first__input {
      margin-top: 0;
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
  margin-top: 2rem;

  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`;
