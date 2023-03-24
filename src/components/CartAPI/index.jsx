import { useEffect, useState } from "react";
// import { useParams } from 'react-router';

const Cart = () => {

  const [data, setData] = useState()
  const [userId, setUserId] = useState(1)
  // const userId = params.userId;

  useEffect(() => {
    getCartByUserId();
  }, [])

  const getCartByUserId = async () => {
    return await fetch(`https://dummyjson.com/carts/user/${userId}`)
      .then(res => res.json())
      .then(data => setData(data.carts[0].products))
      .catch(err => console.log(err))

  }


  return (
    <div className="Cart">
      <h1 className="cart-title">Cart</h1>
      {
        data?.map((item, index) => {
          return (
            <div className="product-user" key={index}>
              <h3>{item?.title}</h3>
              <p>{item?.price}</p>
            </div>
          )

        })
      }
    </div>
  )
}
export default Cart;