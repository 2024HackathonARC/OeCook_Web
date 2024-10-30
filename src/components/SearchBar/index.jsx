import React from "react";
import * as _ from "./style";
import SearchIcon from "../../assets/SearchIcon";

const SearchBar = () => {
  return (
    <_.Layout>
      <SearchIcon />
      <_.Input placeholder="K-푸드를 찾아보세요." />
    </_.Layout>
  );
};

export default SearchBar;
