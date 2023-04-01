import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/sass/base.scss';
import '../../assets/sass/product/productList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const [skip, setSkip] = useState('0');


  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(`https://dummyjson.com/products?limit=6&skip=${skip}&select=title,price,images`);
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
    <div class="product-section">
      <div class="product-block">
        <div className="product-wrap">
          <div class="product-title-wrap">
            <h2 class="product-title">Product Collections</h2>
            <p class="product-title-desc">Most Selling and Trending Product</p>
          </div>
          <div class="product-items">
            {post?.map(item => {
              return (
                <div class="product-item" key={item?.id}>
                  <a href='/#' onClick={(e) => addToCart(item)}>
                    <div class="product-item-image">
                      <img src={item.images[0]} alt="productItem" />
                    </div>
                    <h4 class="product-item-title">
                      {item?.title}
                    </h4>
                    <p class="product-item-cost">
                      $ {item?.price} USD <span class="product-item-discount">$ discountPrice USD</span>
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;