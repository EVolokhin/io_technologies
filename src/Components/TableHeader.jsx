import React from 'react';
import PropTypes from 'prop-types';

export const TableHeader = ({ sortByName, sortByViews, handleSort }) => (
  <thead>
    <tr>
      <th />
      <th />
      <th>
        <input
          type="checkbox"
          name="name"
          checked={sortByName}
          onChange={handleSort}
        />
        <button
          type="button"
          name="name"
          onClick={handleSort}
        >
          sort
        </button>
      </th>
      <th />
      <th>
        <input
          type="checkbox"
          name="pageviews"
          checked={sortByViews}
          onChange={handleSort}
        />
        <button
          type="button"
          name="pageviews"
          onClick={handleSort}
        >
          sort
        </button>
      </th>
    </tr>
  </thead>
);

TableHeader.propTypes = {
  sortByName: PropTypes.bool.isRequired,
  sortByViews: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
};
