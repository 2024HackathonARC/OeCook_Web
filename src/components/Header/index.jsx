import React from "react";
import * as _ from "./style";
import Logo from "../../assets/Logo";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <_.Layout>
      <Logo />
      <SearchBar />
    </_.Layout>
  );
};

export default Header;
