import React from "react";
import * as styled from "./styles";
import icons from "../icons";

const SearchComponent = () => {
  return (
    <styled.SearchContainer>
      <styled.SearchBar>
        <styled.SearchIcon source={icons.search} />
        <styled.SearchInput placeholder="Search something" />
        <styled.FilterIcon source={icons.filter} />
      </styled.SearchBar>
    </styled.SearchContainer>
  );
};

export default SearchComponent;
