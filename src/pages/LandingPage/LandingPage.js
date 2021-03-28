import React from "react";
import GlobalStyle from "../../globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayMap from "../../components/DisplayMap/DisplayMap";

const LandingPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <SearchBar />
      <DisplayMap />
    </div>
  );
};

export default LandingPage;
