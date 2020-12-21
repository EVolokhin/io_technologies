import React from 'react';
import PropTypes from 'prop-types';

export const TableBody = ({ persons, search }) => (
  <tbody>
    {persons.map((person, index) => {
      const nameNormalized = person.name.toLocaleLowerCase();
      const searchNormalized = search.toLocaleLowerCase();
      const visible = nameNormalized.includes(searchNormalized);

      // conditional rendering to show only searchable persons
      return (visible && (
        <tr key={person.id}>
          <td>{index + 1}</td>
          <td>{person.name[0]}</td>
          <td>{person.name}</td>
          <td>{`${person.count_pub} публ.`}</td>
          <td>
            {person.award
              ? <img src={person.award} alt="in top" />
              : 'no'}
          </td>
          <td>{person.pageviews}</td>
        </tr>
      ));
    })}
  </tbody>
);

TableBody.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  search: PropTypes.string.isRequired,
};
