import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  return [currentPage, postPerPage];
};

export default Pagination;
