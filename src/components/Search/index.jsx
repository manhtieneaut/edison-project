import { useState } from 'react';

const Search = ({ onSearch }) => {

    const [key, setKey] = useState('');

    const handleSearch = async () => {
        return await fetch(`https://dummyjson.com/products/search?q=${key}`)
            .then(res => res.json())
            .then(data => {
                onSearch(data.products)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='search'>
            <h1>Search</h1>
            <div className='search-form'>
                <input type='text' value={key} onChange={(e) => setKey(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}
export default Search;