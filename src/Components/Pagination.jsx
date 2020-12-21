import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = (
  { personPerPage,
    totalPersons,
    currentPage,
    paginate },
) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalPersons / personPerPage);

  // make page numbers
  for (let i = 1; i <= lastPage; i += 1) {
    const start = (i === 1) ? i : (i - 1) * personPerPage;
    let end = 10;

    if (i > 1) {
      end = (i === lastPage)
        ? totalPersons
        : i * personPerPage;
    }

    pageNumbers.push(`${start} - ${end}`);
  }

  return (
    <div>
      {(currentPage !== 1) && (
        <button
          onClick={() => paginate(currentPage - 1)}
          type="button"
        >
          &#60;
        </button>
      )}

      <span>
        {pageNumbers[currentPage - 1]}
      </span>

      {(currentPage !== lastPage) && (
        <button
          onClick={() => paginate(currentPage + 1)}
          type="button"
        >
          &#62;
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  personPerPage: PropTypes.number.isRequired,
  totalPersons: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
