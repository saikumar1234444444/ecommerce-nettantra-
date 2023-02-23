import {useContext, useState} from 'react'

import Context from '../../context/Context'
import CartItem from '../CartItem'
import Header from '../Header'

import './index.css'

const Cart = () => {
  const {change} = useContext(Context)
  const [total, setTotal] = useState('')
  const [attach, setAttach] = useState(false)
  const [final, setFinal] = useState(false)

  const getPlace = () => {
    const amount = change.map(value => value.cost)
    const sum = amount.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )
    setTotal(sum)
    console.log(sum)
    setAttach(true)
  }

  const placeOrder = () => {
    setFinal(true)
  }

  return (
    <>
      <Header />
      <div className="align-container">
        <ul className="ul-item-container">
          {change.map(every => (
            <CartItem every={every} key={every.id} />
          ))}
        </ul>
        <div>
          {change.length >= 1 ? (
            <button type="button" className="order" onClick={getPlace}>
              place order
            </button>
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/356/617/original/vector-add-to-cart-icon.jpg"
              alt="cart"
              className="add-cart"
            />
          )}
        </div>
        {attach && change.length >= 1 ? (
          <div className="order-container">
            <h1>Total Price:Rs.{total}/-</h1>
            <p>click on confirm order to place the order</p>
            <button
              type="button"
              className="remove-button"
              onClick={placeOrder}
            >
              confirm order
            </button>
          </div>
        ) : null}
        {final && change.length >= 1 ? (
          <div className="place-container">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/715vwvP5ZEL.png"
              alt="emoji"
              className="emoji"
            />
            <h1 className="place-heading">Order placed Successfully</h1>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Cart
