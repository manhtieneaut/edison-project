import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = () => {
    onSearch(searchKey);
  };

  return (
    <div>
      <input type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;