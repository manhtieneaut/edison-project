import React, { useEffect, useState } from 'react';
import "./style.css"
const ProductList = () => {
    // const getList = async () => {
    //     let response = await fetch('https://dummyjson.com/products/');
    //     let data = await response.json();
    //     return data.products;
    // }
    // getList().then(item => {
    //     console.log(item);

    // })
    const [post, setPost] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://dummyjson.com/products?limit=2&skip=0&select=title,price,images');
                let data = await response.json();
                console.log(data)
                setPost(data.products);
            } catch (error) { }
        };

        getData();
    }, []);
    return (
        <div className="ListProduct">
            {post?.map(item => {
                console.log(item)
                return (
                    <div className='item' key={item?.id}>
                        <img src={item.images[1]} alt='item'></img>
                        <h4 className='item-title' >{item?.title}</h4>
                        <p className='item-price'>{item?.price}$</p>
                        <a className='add-cart' href='/#'>Add to cart</a>
                    </div>
                );
            })}
        </div>
    )
}
export default ProductList;