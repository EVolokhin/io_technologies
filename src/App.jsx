/* eslint-disable no-console */
/* eslint-disable space-unary-ops */
import React, { useState } from 'react';
import './App.scss';
import data from './data.json';

import gold from './resources/medals/1st.svg';
import silver from './resources/medals/2nd.svg';
import bronze from './resources/medals/3rd.svg';

const topAwards = (() => {
  const sorted = [...data].sort((a, b) => b.pageviews - a.pageviews);
  const winners = sorted.slice(0, 3);

  return {
    [winners[0].name]: gold,
    [winners[1].name]: silver,
    [winners[2].name]: bronze,
  };
})();

console.log(topAwards);

const preparedData = data.map((person, ind) => {
  // const fullName = person.name.split(' ');
  // const name = fullName[0];
  // const surname = fullName[1];
  const id = ind + 1;

  if (Object.prototype.hasOwnProperty.call(topAwards, person.name)) {
    return ({
      ...person,
      id,
      hasAward: topAwards[person.name],
    });
  }

  return ({
    ...person,
    id,
    hasAward: null,
  });
});

export const App = () => {
  const [authorsData, setAuthorsData] = useState(preparedData);
  const [sortedField, setSortedField] = useState(null);

  const sortData = () => {
    const sorted = [...authorsData];

    switch (sortedField) {
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'pageviews':
        sorted.sort((a, b) => b.pageviews - a.pageviews);
        break;
      default:
        break;
    }

    return sorted;
  };

  console.log(authorsData);
  console.log(setAuthorsData);
  console.log(sortedField);

  // name count_pub pageviews

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th />
            <th />
            <th>
              <button type="button" onClick={() => setSortedField('name')}>
                Name
              </button>
            </th>
            <th />
            <th>MEDAL</th>
            <th>
              <button type="button" onClick={() => setSortedField('pageviews')}>
                pageviews
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortData().map(person => (
            <tr key={person.id}>
              <td>position</td>
              <td>logo</td>
              <td>{person.name}</td>
              <td>{`${person.count_pub} публ.`}</td>
              <td>
                {person.hasAward
                  ? <img src={person.hasAward} alt="in top" />
                  : 'no'}
              </td>
              <td>{person.pageviews}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
