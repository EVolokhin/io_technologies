import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

export const DataTable = ({ persons, search, setSort }) => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByViews, setSortByViews] = useState(false);

  // hanle sort and checkbox for active sort option
  const handleSort = (event) => {
    if (event.target.name === 'name') {
      setSort('name');
      setSortByViews(false);
      setSortByName(true);
    } else {
      setSort('pageviews');
      setSortByViews(true);
      setSortByName(false);
    }
  };

  return (
    <table className="rate__table">
      <TableHeader
        sortByName={sortByName}
        sortByViews={sortByViews}
        handleSort={handleSort}
      />

      <TableBody
        persons={persons}
        search={search}
      />
    </table>
  );
};

DataTable.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  search: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};
