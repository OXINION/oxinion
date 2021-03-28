import React from "react";
import {
  Form,
  FormContainer,
  FormField,
  FormInput,
  FormLabel,
  FormInputField,
  SearchButton,
} from "./SearchBar.elements";
import { FaSearch, FaSearchengin, FaSearchLocation } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Form>
      <FormContainer>
        <FormField className="first__field">
          <FormInput>
            <FormLabel>
              <FaSearchengin size={20} />
              Find
            </FormLabel>
            <FormInputField type="text" placeholder="Where would you go?" />
          </FormInput>
        </FormField>

        <FormField className="second__field">
          <FormInput>
            <FormLabel>
              <FaSearchLocation />
              Location
            </FormLabel>
            <FormInputField type="text" placeholder="Where would you go?" />
          </FormInput>
        </FormField>
        <SearchButton>
          <FaSearch size={20} />
        </SearchButton>
      </FormContainer>
    </Form>
  );
};

export default SearchBar;
