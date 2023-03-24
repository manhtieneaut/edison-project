import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
const ProductList = () => {
    const navigate = useNavigate();
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

    const addToCart = async (item) => {
        await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [item]
            })
        })
            .then(res => res.json())
            .then(data => console.log('add new cart:', data));
        navigate('/Cart');

    }

    return (
        <div className="ListProduct">
            {post?.map(item => {
                console.log(item)
                return (
                    <div className='item' key={item?.id}>
                        <img src={item.images[1]} alt='item'></img>
                        <h4 className='item-title' >{item?.title}</h4>
                        <p className='item-price'>{item?.price}$</p>
                        {/* <a className='add-cart' href='/#' onClick={addToCart(item)}>Add to cart</a> */}
                    </div>
                );
            })}
        </div>
    )
}
export default ProductList;