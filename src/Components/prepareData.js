import data from '../data.json';

// make an object {name: prize icon url}
// with top 3 persons according to their pageviews
export const topAwards = (() => {
  const sorted = [...data].sort((a, b) => b.pageviews - a.pageviews);
  const winners = sorted.slice(0, 3);
  const gold = './images/1st.svg';
  const silver = './images/2nd.svg';
  const bronze = './images/3rd.svg';

  return {
    [winners[0].name]: gold,
    [winners[1].name]: silver,
    [winners[2].name]: bronze,
  };
})();

// generate background color to person avatar
const getRandomColor = () => {
  const color = Math.floor(Math.random() * 16777216).toString(16);

  return '#000000'.slice(0, -color.length) + color;
};

// preparing data from JSON and marks the top 3 persons
export const preparedData = data.map((person, ind) => {
  const id = ind + 1;

  if (Object.prototype.hasOwnProperty.call(topAwards, person.name)) {
    return ({
      ...person,
      id,
      award: topAwards[person.name],
      avatarColor: getRandomColor(),
    });
  }

  return ({
    ...person,
    id,
    award: null,
    avatarColor: getRandomColor(),
  });
});
