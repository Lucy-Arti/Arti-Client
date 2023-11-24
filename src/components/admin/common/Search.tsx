import React from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  input {
    padding: 0.8rem 1rem;
    font-size: 1.5rem;
	width: 30%;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const Search = ({ onSubmit }: any) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input name="filter" placeholder="Search..." />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Search;
