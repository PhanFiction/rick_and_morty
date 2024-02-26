import PropTypes from 'prop-types';
import CircleButton from '../CircleButton/CircleButton';

export default function Pagination({ totalPages, activePage, nextPage }) {

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Determine the range of page numbers to display
    let startPage;
    let endPage;
    const maxNumPages = 4;
    const numActivePages = maxNumPages - 1;
    
    if (totalPages <= maxNumPages) {
      // Display all pages if there is less than 4 pages
      startPage = 1;
      endPage = totalPages;
    } else if (activePage <= numActivePages) {
      // If the active page is the first two pages, display first four pages
      startPage = 1;
      endPage = maxNumPages;
    } else if (activePage >= totalPages - 1) {
      // If active page is more than the last two pages, display four last pages
      startPage = totalPages - numActivePages;
      endPage = totalPages;
    } else {
      // Center the active pages in the center and display the two pages before and after it
      startPage = activePage - 1;
      endPage = activePage + 1;
    }

    // Generate number of pages to be displayed
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <CircleButton
          key={i}
          handleClick={() => nextPage(i)}
          active={i === activePage ? 'active' : 'not-active'}
        >
          <span>{i}</span>
        </CircleButton>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      { renderPageNumbers() }
    </>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  activePage: PropTypes.number,
  nextPage: PropTypes.func,
};