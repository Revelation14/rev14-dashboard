import React, { useRef, useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="flex items-center">
      <img src="/assets/icons/search.svg" alt="Search" className="h-4 w-4" />
      <input
        id="search"
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="ml-2 border-none bg-transparent focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
