// src/components/ListPages.jsx
import React from 'react';
import ContentComponent from './ContentComponent';

const ListPages = ({ selectedMenu }) => {
  return (
    <div>
      <h2>{selectedMenu.title}</h2>
      <ContentComponent content={selectedMenu.items} />
    </div>
  );
};

export default ListPages;
