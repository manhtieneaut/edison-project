import { useEffect, useState } from 'react';

const SortFilter = () => {

    const [data, setData] = useState();
    const sortOption = ["home-decoration", "smartphones", "laptops", "fragrances", "skincare", "groceries"];

    useEffect(() => {
        loadData();
    }, []);

    const handleSort = async (value) => {
        return await fetch(`https://dummyjson.com/products/category/${value}`)
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
                console.log(data.products)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='sort'>
            <h1>Sort,filter by category</h1>
            <div className='sort-by'>
                <select onChange={(e) => handleSort(e.target.value)}>
                    <option>Please select value</option>
                    {sortOption.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>
            <table className='list'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                {data?.map((item, index) => {
                    return (
                        <tbody key={index} >
                            <tr className='item'>
                                <td>{item?.id}</td>
                                <td>{item?.title}</td>
                                <td>{item?.price}</td>
                                <td>{item?.category}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
export default SortFilter;