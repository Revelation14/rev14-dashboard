import React, { useRef, useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, className }) => {
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
    <div className={`flex flex-row items-center justify-end px-2 ${className}`}>
      <img src="/assets/icons/search.svg" alt="Search" className="h-4 w-4" />
      <input
        id="search"
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="m-2 w-12 border-none bg-transparent focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
