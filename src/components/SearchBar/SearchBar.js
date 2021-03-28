import React from "react";
import {
  Form,
  FormContainer,
  FormField,
  FormInput,
  FormLabel,
  FormInputField,
  SearchButton,
  FormFieldContainer,
} from "./SearchBar.elements";
import { FaSearch, FaSearchengin, FaSearchLocation } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Form>
      <FormContainer>
        <FormFieldContainer>
          <FormField>
            <FormInput className="first__input">
              <FormLabel>
                <FaSearchengin size={20} />
                Find
              </FormLabel>
              <FormInputField type="text" placeholder="Where would you go?" />
            </FormInput>
          </FormField>

          <FormField>
            <FormInput className="second__input">
              <FormLabel>
                <FaSearchLocation />
                Location
              </FormLabel>
              <FormInputField type="text" placeholder="Where would you go?" />
            </FormInput>
          </FormField>
        </FormFieldContainer>

        <SearchButton>
          <FaSearch size={20} />
        </SearchButton>
      </FormContainer>
    </Form>
  );
};

export default SearchBar;
