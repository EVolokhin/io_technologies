import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

export const Search = ({ search, handleSearch }) => (
  <div className="search">
    <img
      className="search__icon"
      src="./images/search.png"
      alt="search"
    />
    <input
      className="search__field"
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="Поиск авторов по имени"
      title="Используйте только русские буквы"
    />
  </div>

);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
