import React from "react";
import {
  Form,
  FormContainer,
  FormField,
  FormInput,
} from "./SearchBar.elements";

const SearchBar = () => {
  return (
    <Form>
      <FormContainer className="">
        <FormField>Search</FormField>
        <FormInput>
          <input type="text" placeholder="What are you looking for?" />
        </FormInput>
        <FormField>Near</FormField>
        <FormInput>
          <input type="text" placeholder="Where would you go?" />
        </FormInput>
      </FormContainer>
    </Form>
  );
};

export default SearchBar;
