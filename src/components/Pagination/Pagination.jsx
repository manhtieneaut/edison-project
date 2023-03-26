import React from "react";
import { useState, useEffect } from "react";

const Pagination = () => { 
  const [post, setPost] = useState();
  const [skip,setSkip] = useState('0');

  useEffect(() => {
      const getData = async () => {
          try {
              let response = await fetch(`https://dummyjson.com/products?limit=2&skip=${skip}&select=title,price,images`);
              let data = await response.json();
              console.log(data)
              setPost(data.products);
          } catch (error) { }
      };

      getData();
  }, [skip]);

 const onPrevPage = () =>{
  let value = skip - 2;
  setSkip(value)
 }
 const onNextPage = () =>{
  let value = skip + 2;
  setSkip(value)
 }

  return (
      <div className="ListProduct">
          {post?.map(item => {
              return (
                  <div className='item' key={item?.id}>
                      <img src={item.images[1]} alt='item'></img>
                      <h4 className='item-title' >{item?.title}</h4>
                      <p className='item-price'>{item?.price}$</p>
                  </div>
              );
          })}
          <div className="pagination">
            <button onClick={onPrevPage}
            disabled={skip<=0}
            >Prev</button>
            <button onClick={onNextPage}
            >Next</button>
          </div>
      </div>
  )
}
export default Pagination