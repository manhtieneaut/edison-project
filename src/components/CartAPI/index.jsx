import { useEffect, useState } from "react";
import { useParams } from "react-router";
const Cart = () => {
  const [data, setData] = useState()
  const { userId } = useParams();
  console.log(userId)

  useEffect(() => {
    getCartByUserId();
  }, [])

  const getCartByUserId = async () => {
    return await fetch(`https://dummyjson.com/carts/user/${userId}`)
      .then(res => res.json())
      .then(data => setData(data.carts[0]))
      .catch(err => console.log(err))

  }
  if (userId) {
    return (
      <div>
        <h1>Giỏ hàng của bạn</h1>
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng cộng</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.title}</td>
                    <td>{product.price} VNĐ</td>
                    <td>{product.quantity}</td>
                    <td>{product.total}VNĐ</td>
                  </tr>
                )
              })
            }

            <tr>
              <td colSpan="3">
                <strong>Tổng tiền:</strong>
              </td>
              <td>
                <strong>1,200,000 VNĐ</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button className="button">Thanh toán</button>
      </div>
    )
  }else{
    return(
      <div>
        <h1>Bạn chưa đăng nhập, hãy đăng nhập để sử dụng giỏ hàng</h1>
      </div>
    )
  }

}
export default Cart;