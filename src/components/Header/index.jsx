import React from "react";
import * as _ from "./style";
import Logo from "../../assets/Logo";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";

const Header = ({ isEnglish }) => {
  const navigate = useNavigate();
  return (
    <_.Layout>
      <Logo
        onClick={() => {
          navigate(`/`);
        }}
      />
      <SearchBar isEnglish={isEnglish} />
    </_.Layout>
  );
};

export default Header;
