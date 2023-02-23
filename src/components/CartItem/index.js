import {useContext} from 'react'

import Context from '../../context/Context'

import './index.css'

const CartItem = props => {
  const {every} = props

  const {brand, cost, imageUrl, rating} = every
  const {deleteCart} = useContext(Context)

  const removeCart = () => {
    deleteCart(every)
  }

  return (
    <li className="cart-container">
      <img src={imageUrl} alt="cart" className="cart-image" />
      <div className="space">
        <h1 className="text-heading">{brand}</h1>
        <h1 className="text-heading">Rs.{cost}</h1>
        <div className="button">
          <p>{rating}</p>
          <img
            src="https://clipartmag.com/images/star-no-background-16.png"
            alt="star"
            className="star"
          />
        </div>
        <button type="button" className="remove-button" onClick={removeCart}>
          remove from cart
        </button>
      </div>
    </li>
  )
}

export default CartItem
