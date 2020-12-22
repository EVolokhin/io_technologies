import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';
import searchIcon from '../resources/images/search.png';

export const Search = ({ search, handleSearch }) => (
  <div className="search">
    <img
      className="search__icon"
      src={searchIcon}
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
