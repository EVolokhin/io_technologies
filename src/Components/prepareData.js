import data from '../data.json';
import gold from '../resources/medals/1st.svg';
import silver from '../resources/medals/2nd.svg';
import bronze from '../resources/medals/3rd.svg';

// make an object {name: prize icon url}
// with top 3 persons according to their pageviews
export const topAwards = (() => {
  const sorted = [...data].sort((a, b) => b.pageviews - a.pageviews);
  const winners = sorted.slice(0, 3);

  return {
    [winners[0].name]: gold,
    [winners[1].name]: silver,
    [winners[2].name]: bronze,
  };
})();

// preparing data from JSON and marks the top 3 persons
export const preparedData = data.map((person, ind) => {
  const id = ind + 1;

  if (Object.prototype.hasOwnProperty.call(topAwards, person.name)) {
    return ({
      ...person,
      id,
      award: topAwards[person.name],
    });
  }

  return ({
    ...person,
    id,
    award: null,
  });
});
