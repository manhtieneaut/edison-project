import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
const ProductList = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const [skip, setSkip] = useState('0');


  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(`https://dummyjson.com/products?limit=4&skip=${skip}&select=title,price,images`);
        let data = await response.json();
        // console.log(data)
        setPost(data.products);
      } catch (error) { }
    };
    getData();
  }, [skip]);


  const addToCart = (item) => {
    try {
      localStorage.removeItem('cart');
      console.log(item)
      // Lưu sản phẩm vào local storage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('cart:', cart);

    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
    navigate('/Cart');

  };


  const onPrevPage = () => {
    let value = skip - 4;
    setSkip(value)
  }
  const onNextPage = () => {
    let value = skip + 4;
    setSkip(value)
  }

  return (
    <div className='product-main'>
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
      <div className="pagination">
        <button onClick={onPrevPage}
          disabled={skip <= 0}
        >Prev</button>
        <button onClick={onNextPage}
        >Next</button>
      </div>
    </div>
  )
}
export default ProductList;