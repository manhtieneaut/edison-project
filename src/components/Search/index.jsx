import React, { useEffect, useState } from 'react';

const Search = () => {

    const [data, setData] = useState();
    const [key, setKey] = useState('');


    useEffect(() => {
        loadData();
    }, []);

    const handleSearch = async () => {
        return await fetch(`https://dummyjson.com/products/search?q=${key}`)
            .then(res => res.json())
            .then(data => {
                setData(data.products)
            })
            .catch(err => console.log(err))
    }

    const loadData = async () => {
        return await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setData(data.products)
                console.log(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='search'>
            <h1>Search</h1>

            <div className='search-form'>
                <input type='text' value={key} onChange={(e)=>setKey(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table className='list'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {data?.map((item, index) => {
                    return (
                        <tbody key={index} >
                            <tr className='item'>
                                <td>{item?.id}</td>
                                <td>{item?.title}</td>
                                <td>{item?.price}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
export default Search;