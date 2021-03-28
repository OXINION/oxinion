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
      <FormContainer className="form__container">
        <FormField>
          <FormInput>
            <FormLabel>
              <FaSearchengin size={20} />
              Find
            </FormLabel>
            <FormInputField
              className="form__input"
              type="text"
              placeholder="Where would you go?"
            />
          </FormInput>
        </FormField>

        <FormField>
          <FormInput>
            <FormLabel>
              <FaSearchLocation />
              Location
            </FormLabel>
            <FormInputField
              className="form__input"
              type="text"
              placeholder="Where would you go?"
            />
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
