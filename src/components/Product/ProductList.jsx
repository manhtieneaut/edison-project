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

    // add to cart by dummy json

    // const addToCart = async (item) => {
    //     await fetch('https://dummyjson.com/carts/add', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             userId: 1,
    //             products: [item]
    //         })
    //     })
    //         .then(res => res.json())    
    //         .then(data => console.log('add new cart:', data));
    //     navigate('/Cart');

    // }

    // add to cart by local json
    const addToCart = async (item) => {
        // thêm sản phẩm vào giỏ hàng trên server
        await fetch('  http://localhost:3000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [item]
            })
        })
            .then(res => res.json())
            .then(data => console.log('add new cart:', data));

        // lấy thông tin giỏ hàng từ Local Storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // thêm sản phẩm vào giỏ hàng
        cart.push(item);

        // lưu lại thông tin giỏ hàng vào Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // chuyển hướng sang trang giỏ hàng
        navigate('/Cart');
    }

    
    // lấy giỏ hàng (chuyển code này sang Cart)
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // console.log('cart:', cart);



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