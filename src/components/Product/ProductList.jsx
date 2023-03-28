import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
const ProductList = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://dummyjson.com/products?limit=2&skip=0');
                let data = await response.json();
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

    // }

    // add to cart by local json
    const addToCart = async (item) => {
        try {
          // Thêm sản phẩm vào giỏ hàng trên server
          await fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: 1,
              products: [item]
            })
          });
          
          // Lưu sản phẩm vào local storage
          const cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(item);
          localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
          console.error('Error adding to cart:', error);
        }
        navigate('/Cart');
      };

   


    return (
        <div className="ListProduct">
            {post?.map(item => {
                return (
                    <div className='item' key={item?.id}>
                        <img src={item.images[1]} alt='item'></img>
                        <h4 className='item-title' >{item?.title}</h4>
                        <p className='item-price'>{item?.price}$</p>
                        <a className='add-cart' onClick={(e) => addToCart(item)}>Add to cart</a>
                    </div>
                );
            })}
        </div>
    )
}
export default ProductList;