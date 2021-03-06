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
          <td>
            <span style={{ backgroundColor: person.avatarColor }}>
              {person.name[0]}
            </span>
          </td>
          <td>
            <span>
              {person.name}
            </span>
            <br />
            {`${person.count_pub} публ.`}
          </td>
          <td>
            {person.award
              ? <img src={person.award} alt="in top" />
              : null}
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
