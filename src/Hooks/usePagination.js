import { useState } from "react";

function usePagination(list, displayQuantity) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(displayQuantity);

  //get current orders
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = list.slice(indexOfFirstOrder, indexOfLastOrder);
  //get number of pages
  const pagesNumber = Math.ceil(list.length / itemsPerPage);

  function handlePagination(e, value) {
    setCurrentPage(value);
  }

  return { currentOrders, currentPage, pagesNumber, handlePagination };
}

export default usePagination;
