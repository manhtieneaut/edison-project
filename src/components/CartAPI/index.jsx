import { useEffect } from "react";

const Cart = () => {

  useEffect(() => {
    getCartByUserId();
  }, [])

  const getCartByUserId = async (userId) => {
    return await fetch(`https://dummyjson.com/carts/user/${userId}`)
      .then(res => res.json())
      .then(data => console.log('cart by id:',data) )
      .catch(err => console.log(err))
  }
  getCartByUserId(1)

  return (
    <div className="Cart">
      <h1 className="cart-title">Cart</h1>
    </div>
  )
}
export default Cart;