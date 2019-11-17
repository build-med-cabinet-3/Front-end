import React, { useState } from "react";
import styled from "styled-components";

const SearchFormContainer = styled.section``;
export default function SearchForm(props) {
  const [searchCriteria, setSearchCriteria] = useState({ criteria: "" });

  const handleChange = event => {
    setSearchCriteria({
      ...searchCriteria,

      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.setStrainToSearch(searchCriteria.criteria);

    setSearchCriteria({ criteria: "" });
  };

  return (
    <SearchFormContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="criteria"> Search </label>
        <input
          id="criteria"
          value={searchCriteria.criteria}
          onChange={handleChange}
          placeholder="Search"
          name="criteria"
          type="text"
        />
        <button type="submit"> Submit </button>{" "}
      </form>
    </SearchFormContainer>
  );
}
