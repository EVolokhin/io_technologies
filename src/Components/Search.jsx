import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ search, handleSearch }) => (
  <input
    className="rate__search"
    type="text"
    value={search}
    onChange={handleSearch}
    placeholder="Поиск авторов по имени"
  />
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
