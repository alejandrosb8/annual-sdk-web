import React from 'react';
import { SearchIcon } from './SearchIcon';
export const SearchBar = (props) => {
  const { handleSubmit } = props;

  return (
    <form
      onSubmit={(e) => handleSubmit(e, document.getElementById('searchInput').value)}
      className="w-full flex items-center justify-center mt-6"
    >
      <div className="w-4/5 max-w-screen-sm relative">
        <input
          placeholder="Buscar..."
          id="searchInput"
          type="text"
          className="bg-white shadow-lg w-full px-2 py-1 focus:outline-none text-md rounded-md"
        />
        <button type="submit" className="absolute [right:0px] [top:0] [bottom:0] px-2 rounded-md transition-colors hover:bg-off-gray">
          <SearchIcon color={'#ed581e'} />
        </button>
      </div>
    </form>
  );
};
