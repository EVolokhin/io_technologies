import React, { useState } from 'react';
import { Search } from './Components/Search';
import { DataTable } from './Components/DataTable';
import { preparedData } from './Components/prepareData';
import { Pagination } from './Components/Pagination';
import './App.scss';

export const App = () => {
  const [authorsData] = useState(preparedData);
  const [sortedField, setSortedField] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [personPerPage] = useState(10);

  // sorting person data according to chosen column
  const sortData = (() => {
    const newData = [...authorsData];

    switch (sortedField) {
      case 'name':
        newData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'pageviews':
        newData.sort((a, b) => b.pageviews - a.pageviews);
        break;
      default:
        break;
    }

    return newData;
  })();

  // get current persons for pagination
  const indexOfLastPerson = currentPage * personPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personPerPage;
  const currentPersons = sortData
    .slice(indexOfFirstPerson, indexOfLastPerson);

  // controlled input (search bar)
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="wrapper">
      <Search
        search={search}
        handleSearch={handleSearch}
      />
      <DataTable
        persons={currentPersons}
        search={search}
        setSort={setSortedField}
      />

      <Pagination
        personPerPage={personPerPage}
        totalPersons={authorsData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};
