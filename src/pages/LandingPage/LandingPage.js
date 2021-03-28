import React from "react";
import GlobalStyle from "../../globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";

const LandingPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default LandingPage;
